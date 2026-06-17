import 'reflect-metadata';
import dataSource from '../config/data-source';
import { User } from '../entities';
import * as bcrypt from 'bcrypt';

const SAMPLE_EMAIL = process.env.SAMPLE_USER_EMAIL || 'admin@example.com';
const SAMPLE_PASSWORD = process.env.SAMPLE_USER_PASSWORD || 'Admin@123';

async function run() {
    await dataSource.initialize();

    try {
        const repo = dataSource.getRepository(User);
        const email = SAMPLE_EMAIL.trim().toLowerCase();

        let user = await repo.findOne({
            where: [
                { email },
                { username: email },
            ],
        });

        if (!user) {
            user = repo.create({
                email,
                username: email,
                displayName: 'Sample Admin',
                status: 'active',
                emailVerified: true,
                passwordHash: await bcrypt.hash(SAMPLE_PASSWORD, 10),
            });
            await repo.save(user);
        } else {
            user.email = email;
            user.username = email;
            user.displayName = user.displayName || 'Sample Admin';
            user.status = 'active';
            user.emailVerified = true;
            user.passwordHash = await bcrypt.hash(SAMPLE_PASSWORD, 10);
            await repo.save(user);
        }
    } finally {
        await dataSource.destroy();
    }
}

run().catch((error) => {
    console.error('Failed to seed sample user:', error);
    process.exitCode = 1;
});
