import {useQuery} from '@tanstack/react-query';

import {getOngoingOrders , getOrderById ,getPreviousOrders} from '../api/orderApi'

export const useOngoingOrders = (userId: string | undefined) => {
    return useQuery({
        queryKey: ['ongoingOrders', userId],
        queryFn: () => userId ? getOngoingOrders(userId) : Promise.resolve([]),
        enabled: !!userId,
    });
}

export const usePreviousOrders = (userId: string | undefined) => {
    return useQuery({
        queryKey: ['previousOrders', userId],
        queryFn: () => userId ? getPreviousOrders(userId) : Promise.resolve([]),
        enabled: !!userId,
    });
}

export const useOrderById = (orderId: string | undefined) => {
    return useQuery({
        queryKey: ['orderById', orderId],
        queryFn: async () => {
            if (!orderId) {
                throw new Error('An order ID is required');
            }
            return getOrderById(orderId);
        },
        enabled: !!orderId,
    });
}