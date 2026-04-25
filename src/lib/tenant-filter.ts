import { supabase } from './supabase';

/**
 * Fallback for tenant query from SKTQ.
 * Sàn Uy Tín does not use multi-tenant.
 */
export function tenantQuery(table: string, tenantId?: string | null, role?: string | null) {
    return supabase.from(table).select('*');
}

export function withTenantId<T extends Record<string, any>>(data: T, tenantId?: string | null): T {
    return data;
}
