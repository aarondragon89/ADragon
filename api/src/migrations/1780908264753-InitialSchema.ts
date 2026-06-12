import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1780908264753 implements MigrationInterface {
    name = 'InitialSchema1780908264753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_claims_source_enum" AS ENUM('system', 'admin', 'self_service', 'import')`);
        await queryRunner.query(`CREATE TYPE "public"."user_claims_override_effect_enum" AS ENUM('allow', 'deny')`);
        await queryRunner.query(`CREATE TABLE "user_claims" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" integer NOT NULL, "claim_id" uuid NOT NULL, "assigned_by_user_id" integer, "source" "public"."user_claims_source_enum" NOT NULL DEFAULT 'admin', "override_effect" "public"."user_claims_override_effect_enum", "assigned_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "expires_at" TIMESTAMP WITH TIME ZONE, "reason" text, "metadata" jsonb, CONSTRAINT "PK_d57edcf140adf0577ee653fb261" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_user_claims_expires_at" ON "user_claims" ("expires_at") `);
        await queryRunner.query(`CREATE INDEX "idx_user_claims_claim_id" ON "user_claims" ("claim_id") `);
        await queryRunner.query(`CREATE INDEX "idx_user_claims_user_id" ON "user_claims" ("user_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_user_claims_user_id_claim_id" ON "user_claims" ("user_id", "claim_id") `);
        await queryRunner.query(`CREATE TYPE "public"."claims_effect_enum" AS ENUM('allow', 'deny')`);
        await queryRunner.query(`CREATE TABLE "claims" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying(140) NOT NULL, "resource" character varying(120) NOT NULL, "action" character varying(120) NOT NULL, "effect" "public"."claims_effect_enum" NOT NULL DEFAULT 'allow', "description" text, "condition" jsonb, CONSTRAINT "PK_96c91970c0dcb2f69fdccd0a698" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_claims_action" ON "claims" ("action") `);
        await queryRunner.query(`CREATE INDEX "idx_claims_resource" ON "claims" ("resource") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_claims_resource_action_effect" ON "claims" ("resource", "action", "effect") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_claims_code" ON "claims" ("code") `);
        await queryRunner.query(`CREATE TYPE "public"."role_claims_source_enum" AS ENUM('system', 'admin', 'self_service', 'import')`);
        await queryRunner.query(`CREATE TABLE "role_claims" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role_id" uuid NOT NULL, "claim_id" uuid NOT NULL, "source" "public"."role_claims_source_enum" NOT NULL DEFAULT 'system', "expires_at" TIMESTAMP WITH TIME ZONE, "metadata" jsonb, CONSTRAINT "PK_891a9a00e38b0f68d21b1278eb9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_role_claims_expires_at" ON "role_claims" ("expires_at") `);
        await queryRunner.query(`CREATE INDEX "idx_role_claims_claim_id" ON "role_claims" ("claim_id") `);
        await queryRunner.query(`CREATE INDEX "idx_role_claims_role_id" ON "role_claims" ("role_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_role_claims_role_id_claim_id" ON "role_claims" ("role_id", "claim_id") `);
        await queryRunner.query(`CREATE TABLE "roles" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "code" character varying(80) NOT NULL, "description" text, "priority" integer NOT NULL DEFAULT '0', "is_system" boolean NOT NULL DEFAULT false, "parent_role_id" uuid, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_roles_priority" ON "roles" ("priority") `);
        await queryRunner.query(`CREATE INDEX "idx_roles_parent_role_id" ON "roles" ("parent_role_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_roles_code" ON "roles" ("code") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_roles_name" ON "roles" ("name") `);
        await queryRunner.query(`CREATE TYPE "public"."user_roles_source_enum" AS ENUM('system', 'admin', 'self_service', 'import')`);
        await queryRunner.query(`CREATE TABLE "user_roles" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" integer NOT NULL, "role_id" uuid NOT NULL, "assigned_by_user_id" integer, "source" "public"."user_roles_source_enum" NOT NULL DEFAULT 'admin', "is_primary" boolean NOT NULL DEFAULT false, "assigned_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "expires_at" TIMESTAMP WITH TIME ZONE, "metadata" jsonb, CONSTRAINT "PK_8acd5cf26ebd158416f477de799" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_user_roles_expires_at" ON "user_roles" ("expires_at") `);
        await queryRunner.query(`CREATE INDEX "idx_user_roles_role_id" ON "user_roles" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "idx_user_roles_user_id" ON "user_roles" ("user_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_user_roles_user_id_role_id" ON "user_roles" ("user_id", "role_id") `);
        await queryRunner.query(`CREATE TABLE "users" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "id" SERIAL NOT NULL, "email" character varying(160) NOT NULL, "username" character varying(80) NOT NULL, "password_hash" character varying(255), "display_name" character varying(120), "status" character varying(32) NOT NULL DEFAULT 'active', "email_verified" boolean NOT NULL DEFAULT false, "last_login_at" TIMESTAMP WITH TIME ZONE, "metadata" jsonb, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "idx_users_status" ON "users" ("status") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_users_username" ON "users" ("username") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "uq_users_email" ON "users" ("email") `);
        await queryRunner.query(`ALTER TABLE "user_claims" ADD CONSTRAINT "fk_user_claims_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claims" ADD CONSTRAINT "fk_user_claims_claim_id" FOREIGN KEY ("claim_id") REFERENCES "claims"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_claims" ADD CONSTRAINT "fk_user_claims_assigned_by_user_id" FOREIGN KEY ("assigned_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claims" ADD CONSTRAINT "fk_role_claims_role_id" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_claims" ADD CONSTRAINT "fk_role_claims_claim_id" FOREIGN KEY ("claim_id") REFERENCES "claims"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "roles" ADD CONSTRAINT "fk_roles_parent_role_id" FOREIGN KEY ("parent_role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "fk_user_roles_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "fk_user_roles_role_id" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "fk_user_roles_assigned_by_user_id" FOREIGN KEY ("assigned_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "fk_user_roles_assigned_by_user_id"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "fk_user_roles_role_id"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "fk_user_roles_user_id"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP CONSTRAINT "fk_roles_parent_role_id"`);
        await queryRunner.query(`ALTER TABLE "role_claims" DROP CONSTRAINT "fk_role_claims_claim_id"`);
        await queryRunner.query(`ALTER TABLE "role_claims" DROP CONSTRAINT "fk_role_claims_role_id"`);
        await queryRunner.query(`ALTER TABLE "user_claims" DROP CONSTRAINT "fk_user_claims_assigned_by_user_id"`);
        await queryRunner.query(`ALTER TABLE "user_claims" DROP CONSTRAINT "fk_user_claims_claim_id"`);
        await queryRunner.query(`ALTER TABLE "user_claims" DROP CONSTRAINT "fk_user_claims_user_id"`);
        await queryRunner.query(`DROP INDEX "public"."uq_users_email"`);
        await queryRunner.query(`DROP INDEX "public"."uq_users_username"`);
        await queryRunner.query(`DROP INDEX "public"."idx_users_status"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."uq_user_roles_user_id_role_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_roles_user_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_roles_role_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_roles_expires_at"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TYPE "public"."user_roles_source_enum"`);
        await queryRunner.query(`DROP INDEX "public"."uq_roles_name"`);
        await queryRunner.query(`DROP INDEX "public"."uq_roles_code"`);
        await queryRunner.query(`DROP INDEX "public"."idx_roles_parent_role_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_roles_priority"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP INDEX "public"."uq_role_claims_role_id_claim_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_role_claims_role_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_role_claims_claim_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_role_claims_expires_at"`);
        await queryRunner.query(`DROP TABLE "role_claims"`);
        await queryRunner.query(`DROP TYPE "public"."role_claims_source_enum"`);
        await queryRunner.query(`DROP INDEX "public"."uq_claims_code"`);
        await queryRunner.query(`DROP INDEX "public"."uq_claims_resource_action_effect"`);
        await queryRunner.query(`DROP INDEX "public"."idx_claims_resource"`);
        await queryRunner.query(`DROP INDEX "public"."idx_claims_action"`);
        await queryRunner.query(`DROP TABLE "claims"`);
        await queryRunner.query(`DROP TYPE "public"."claims_effect_enum"`);
        await queryRunner.query(`DROP INDEX "public"."uq_user_claims_user_id_claim_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_claims_user_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_claims_claim_id"`);
        await queryRunner.query(`DROP INDEX "public"."idx_user_claims_expires_at"`);
        await queryRunner.query(`DROP TABLE "user_claims"`);
        await queryRunner.query(`DROP TYPE "public"."user_claims_override_effect_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_claims_source_enum"`);
    }

}
