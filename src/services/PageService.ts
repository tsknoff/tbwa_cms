import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPage} from "../models/IPage";
export const TBWA_SITE_URL = 'https://tsknoff.ru/cms_test/tbwa/';
export const TBWA_ASSETS_URL = 'https://tbwa.ru/assets/';
export const TBWA_HANDLER_URL = '/cms_test/tbwa/cms/handler.php';

export const pageAPI = createApi({
    reducerPath: 'pageAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://tsknoff.ru'}),
    tagTypes: ['Page'],
    endpoints: (build) => ({
        fetchAllPages: build.query<IPage[], ''>({
            query: () => ({
                url: TBWA_HANDLER_URL,
                params: {
                    token: 'token',
                    method: 'getPages'
                }
            }),
            providesTags: result => ['Page']
        }),
        fetchAllPagesByType: build.query<IPage[], string>({
            query: (pageType: '') => ({
                url: TBWA_HANDLER_URL,
                params: {
                    token: 'token',
                    method: 'getPagesByType',
                    type: pageType
                }
            }),
            providesTags: result => ['Page']
        }),
        createPage: build.mutation<any, IPage>({
            query: (page) => ({
                url: TBWA_HANDLER_URL,
                params: {
                    token: 'token',
                    method: 'createPage',
                    type: page.type,
                    title: page.title
                }
            }),
            invalidatesTags: ['Page']
        }),
        updatePage: build.mutation<IPage, IPage>({
            query: (page) => ({
                url: '/pages/${page.id}',
                method: 'PUT',
                body: page
            }),
            invalidatesTags: ['Page']
        }),
        deletePage: build.mutation<IPage, IPage>({
            query: (page) => ({
                url: '/pages${page.id}',
                method: 'DELETE',
                body: page
            }),
            invalidatesTags: ['Page']
        })
    })
})