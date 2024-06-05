"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";



export async function createReview(newReview: any,revalidate?:string) {
    
    try {
        
        
        const token = cookies().get('session')?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newReview)
        });
        const out = await res.json();
        console.log(out)
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if(revalidate) revalidatePath(revalidate)
    }
    
}