// api/movie.ts
import axios from 'axios';
import { Movie } from '@/type';
import { apiClient } from './api';

// Fetch all movies
export const fetchMovies = async (params = {}): Promise<Movie[]> => {
    try {
        const response = await apiClient.get('/phim/get', { params });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API: [Lỗi khi xử lý dữ liệu phim]', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch a movie by ID
export const fetchMovieById = async (id: string): Promise<Movie> => {
    try {
        const response = await apiClient.get(`/phim/find/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API [Lỗi khi xử lý dữ liệu]', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch showtimes by movie ID
export const fetchShowtimesByMovieId = async (movieId: string): Promise<any> => {
    try {
        const response = await apiClient.get(`/api/movie/${movieId}/showtimes`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API [Lỗi khi xử lý dữ liệu]', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch showtimes by movie ID for a week
export const fetchShowtimesByMovieIdForWeek = async (movieId: string): Promise<any> => {
    try {
        const response = await apiClient.get(`/api/movie/${movieId}/showtimes/week`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API [Lỗi khi xử lý dữ liệu]', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch seats by showtime ID
export const fetchSeatsByShowtimeId = async (showtimeId: string): Promise<any> => {
    try {
        const response = await apiClient.get(`/api/showtime/${showtimeId}/seats`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API [Lỗi khi xử lý dữ liệu]', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch movies showing now
export const fetchMovieNow = async (): Promise<Movie[]> => {
    try {
        const response = await apiClient.get('/api/movie/now');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};

// Fetch movies coming in the future
export const fetchMovieFuture = async (): Promise<Movie[]> => {
    try {
        const response = await apiClient.get('/api/movie/future');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Đã xảy ra sự cố với thao tác tìm nạp:', error.response ? error.response.data : error.message);
        } else {
            console.error('API: [Lỗi không xác định]', error);
        }
        throw error;
    }
};
