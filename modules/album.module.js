import { supabase } from "../config/supabase.config.js";

export default class albumModel {
    static async getAllAlbums() {
        try {
            const { data, error } = await supabase
                .from('albums')
                .select('id, title, artist(name), release_date')
            if (error) {
                throw new Error(error)
            }
            else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl af kald af album ${error}`);
        }
    }
    static async getSingleAlbum(id) {
        try {
            const { data, error } = await supabase
                .from('albums')
                .select('id, title, artist(name), release_date')
                .eq('id', id)
                .single()
            if (error) {
                throw new Error(error)
            }
            else {
                return data
            }
        }
        catch (error) {
            console.error(`Fejl af kald af album ${error}`);
        }
    }
    static async createAlbum(formdata) {
        try {
            const { data, error } = await supabase
                .from("albums")
                .insert([
                    {
                        title: formdata.title,
                        description: formdata.description,
                        image: formdata.image,
                        release_date: formdata.release_date,
                        artist_id: formdata.artist_id
                    }
                ])
                if (error) {
                    throw new Error(error.message)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl i at oprette album: ${error}`);
        }
    }
    static async updateAlbums(formdata) {
        try {
            let { data, error } = await supabase
                .from("albums")
                .update([
                    {
                        title: formdata.title,
                        content: formdata.content,
                        lyrics: formdata.lyrics,
                        artist_id: formdata.artist_id
                    }
                ])
                .eq("id", formdata.id)
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl i at update album: ${error}`);
        }
    }
    static async deleteAlbum(formdata) {
        try {
            let { data, error} = await supabase
                .from("albums")
                .delete()
                .eq("id", formdata.id)
                if (error) {
                    throw new Error(error.message);
                }
                else {
                    return data;
                }
        }
        catch (error) {
            console.error(`Fejl i at slette album: ${error}`);
        }
    }
}