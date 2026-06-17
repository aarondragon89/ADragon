import { User } from "@/interfaces/user";
import { userApi } from "@/lib/api";
import { createEntityStore } from "@adragon-web/store";

export const useUsersStore = createEntityStore<User>(userApi);
