import apiClient from './axios';

/**
 * Testimonials API Service
 * Handles all testimonial-related API calls for admin
 */

/**
 * Get all testimonials with pagination and search
 * @param {Object} params - Query parameters
 * @param {number} [params.page=1] - Page number
 * @param {number} [params.limit=20] - Items per page
 * @param {string} [params.search] - Search query (name or feedback)
 * @returns {Promise} Response with testimonials and pagination
 */
export const getAllTestimonials = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    if (params.page) queryParams.append('page', params.page);
    if (params.limit) queryParams.append('limit', params.limit);
    if (params.search) queryParams.append('search', params.search);

    const queryString = queryParams.toString();
    const url = `/api/admin/testimonials${queryString ? `?${queryString}` : ''}`;
    
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Create a new testimonial
 * @param {FormData} formData - FormData containing first_name, last_name, feedback, and image (optional)
 * @returns {Promise} Response with created testimonial
 */
export const createTestimonial = async (formData) => {
  try {
    const response = await apiClient.post('/api/admin/testimonials', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a testimonial
 * @param {string} id - Testimonial ID
 * @returns {Promise} Response indicating success
 */
export const deleteTestimonial = async (id) => {
  try {
    const response = await apiClient.delete(`/api/admin/testimonials/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

