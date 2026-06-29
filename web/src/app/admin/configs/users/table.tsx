import { useUsersStore } from "@/store";
import { TableConfig } from "@adragon-web/interfaces";
import type { User } from "@/interfaces/user";
import { ColumnType } from "@adragon-web/core";

const usersTableConfig: TableConfig<User> = {
  title: "User Table",
  columns: [
    {
      key: "username",
      header: "Username",
      type: ColumnType.Text,
    },
    {
      key: "email",
      header: "Email",
      type: ColumnType.Text,
    },
    {
      key: "displayName",
      header: "Display Name",
      type: ColumnType.Text,
    },
    {
      key: "status",
      header: "Status",
      type: ColumnType.Text,
    },
    {
      key: "lastLoginAt",
      header: "Last Login",
      type: ColumnType.DateTime,
    },
    {
      key: "emailVerified",
      header: "Email Verified",
      type: ColumnType.Boolean,
    },
  ],
  useStore: useUsersStore,
  dataKey: "items",
  fetchKey: "filterUserWithRoles",
  fetchParams: {},
  buttons: [
    { label: "Create User", action: "create" },
  ],
  filterTabs: ["All"],
  deleteKey: "remove",
  deleteColumn: "username",
};

export default usersTableConfig;
