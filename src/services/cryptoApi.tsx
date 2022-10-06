
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': '22964dccc5msh0484b09b6fe9e08p1006c4jsn1ebbc8343bc3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com/'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url: string)=>({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        })
    })
});

export const { useGetCryptosQuery } = cryptoApi;