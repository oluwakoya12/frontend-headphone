import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'vvbd4t9r',
    dataset: 'production',
    apiVersion: '2024-08-05',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})



const builder = new imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);