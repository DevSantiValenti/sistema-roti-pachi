import { supabase } from "./supabase.js";

export async function login(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    return !error;
}

export async function logout() {
    await supabase.auth.signOut();
}

export async function getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
}
