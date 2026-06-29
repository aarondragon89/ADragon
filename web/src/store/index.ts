import { User } from "@/interfaces/user";
import { userApi } from "@/lib/api";
import { FilterPayload } from "@adragon-web/index";
import { createEntityStore } from "@adragon-web/store";

export const useUsersStore = createEntityStore<User>(userApi, {
    normalizeList: (response) => {
        if (Array.isArray(response)) {
            return response;
        } else if (response?.data && Array.isArray(response.data)) {
            return response.data;
        } else if (response?.users && Array.isArray(response.users)) {
            return response.users;
        }
        return [];
    },
    extraActions: (set, _get) => ({
        filterUserWithRoles: async (params: FilterPayload = {}) => {
            set({ loading: true, error: null });
            try {
                const res = await userApi.filterUserWithRoles(params);

                const users = Array.isArray(res.data)
                    ? res.data
                    : res.data?.users ?? [];

                set({ items: users, loading: false });
                return users as User[];
            } catch (err: any) {
                set({ error: err?.message ?? "Filter user with roles failed", loading: false });
                return [] as User[];
            }
        },
    }),
});
