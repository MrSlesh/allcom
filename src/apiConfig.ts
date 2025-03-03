const apiBaseUrl = 'http://127.0.0.1:8080';

export default {
	apiBaseUrl,
	addProductEndpoint: `/api/products/add`,
	updateProductEndpoint: `/api/products/update`,
	getAllProductEndpoint: `/api/products/search`,
	getProductByIdEndpoint: `/api/products/`,
	authCheckEndpoint: `/api/auth/check`,
	loginEndpoint: `/api/auth/login`,
	registerEndpoint: `/api/auth/register`,
	logoutEndpoint: `/api/auth/logout`,
	restoreEndpoint: `/api/auth/restore`,
	restoreNewPasswordEndpoint: `/api/auth/restoreNewPassword`,
	getUserProfileEndpoint: `/api/users/getUserProfile`,
	getAllUsersEndpoint: `/api/users/getAll`,
	getAllCategoriesEndpoint: `/api/categories/all`,
	getAllCategoriesByParentEndpoint: `/api/categories/allByParent/`,
	findUserByIdEndpoint: `/api/users/foundUserById/`,
	findUserByEmailEndpoint: `/api/users/foundUserByEmail/`,
	updateUserEndpoint: `/api/users/updateUser/`,
	changeUserStatusEndpoint: `/api/users/changeStatus/`,
};
