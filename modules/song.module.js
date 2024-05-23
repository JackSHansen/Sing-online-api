import { supabase } from "../config/supabase.config.js";
export default class SongModule{
    static async getAllRecords(){
        try {
            const {data, error} =  await supabase
            .from ('songs')
            .select ('id, title, content, created_ad, artist(name)')
            if (error) {
                throw new Error (error)
            }
        else {
            return data
        }
    }
    
        catch (error) {
        console.error(`fejl af kald af sang ${error}`);
        }
    }


static async getRecordByid(id) {
    try {
        const {data, error} = await supabase
        .from ('songs')
        select (`id, title, content, created_ad, artist (name)`)
        .eq('id', id)
        .single()
        if (error) {
            throw new Error (error)
        }
        else {
            return data
        }
    }
    catch (error) {
        console.error(`fejl af kald af sange ${error}`);
    }
}

static async createRecord(formdata) {
    try {
        const { data, error } = await supabase.from ('songs')
        .insert([
            {
                title: formdata.title,
                content: formdata.content,
                lyric: formdata.lyric,
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
        console.error(`fejl i oprettelsen af sang: ${error}`);
    }
}
static async updateRecord(formdata) {
    try {
        let {data, error} = await supabase
        .from("songs")
        .update([
            {
                title: formdata.title,
                content: formdata.content,
                lyric: formdata.lyric,
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
        console.error(`fejl i oprettelsen af sang: ${error}`);
    }
}
static async deleteRecord(formdata) {
    try {
        let { data, error } = await supabase
            .from("songs")
            .delete()
            .eq("id", formdata.id)
            if (error) {
                throw new Error(error.message)
            }
            else {
                return data;
            }
    }
    catch (error) {
        console.error(`Error deleting song: ${error}`);
    }
   }
}