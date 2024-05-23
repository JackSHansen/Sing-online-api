import { log } from 'console';
import { supabase } from '../config/supabase.config.js';

export default class artistModel {
    static async getAllArtists() {
        try {
            const { data, error } = await supabase
                .from('artist')
                .select('id, name')
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af artister ${error}`);
        }
    }

    static async getSingleArtist(id) {
        try {
            const { data, error } = await supabase
                .from('artist')
                .select('id, name')
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
            console.error(`Fejl af kald af artist ${error}`);
        }
    }

    static async createArtist(formdata) {
        try {
            const { data, error } = await supabase
                .from('artist')
                .insert([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image
                    }
                ])
                if (error) {
                    throw new Error(error)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Fejl af kald af artist ${error}`);
        }
    }

    static async updateArtist(formdata) {
        try {
            let { data, error} = await supabase
                .from("artist")
                .update([
                    {
                        name: formdata.name,
                        description: formdata.description,
                        image: formdata.image
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
            console.error(`Fejl i at update artist: ${error}`);
        }
    }

    static async deleteArtist(formdata) {
        try {
            let { data, error } = await supabase
                .from("artist")
                .delete()
                .eq("id", formdata.id)
                if (error) {
                    throw new Error(error.message)
                }
                else {
                    return data
                }
        }
        catch (error) {
            console.error(`Error deleting artist: ${error}`);
        }
    }
}