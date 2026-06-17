import usersTableConfig from "./users/table";
import type { TableConfig } from "@adragon-web/interfaces";

const tableConfigs: Record<string, TableConfig> = {
    "users": usersTableConfig,
};

export default tableConfigs;
