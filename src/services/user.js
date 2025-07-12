import httpService from "./httpService";

export const registerService = (data) => {
    return httpService('/auth/register', 'post', data);
};

export const getAllUsersService = () => {
    return httpService('/auth/users', 'get');
};

export const getSingleUserService = (userId = null) => {
    const endpoint = userId ? `/auth/user/${userId}` : '/auth/user';
    return httpService(endpoint, 'get');
};

export const updateUserInfoService = (userId, data) => {
    return httpService(`/auth/user/${userId}`, 'put', data);
};

export const deleteUserService = (userId) => {
    return httpService(`/auth/user/${userId}`, 'delete');
};


















// router.post('/register', [
//     body('name').trim().isLength({ min: 5 }).notEmpty(),
//     body('email').isEmail(),
//     body('password').trim().isLength({ min: 5 }),
// ], authController.register);

// router.post('/login', [
//     body('name').trim().isLength({ min: 5 }).notEmpty(),
//     body('email').isEmail(),
//     body('password').trim().isLength({ min: 5 }),
// ], authController.login);

// router.post('/reset-password-request', [
//     body('email').isEmail(),
// ], authController.resetPasswordRequest);

// router.post('/reset-password', [
//     body('password').trim().isLength({ min: 5 }),
// ], authController.resetPassword);

// router.get('/user', authenticate, authController.getUser);
// router.get('/users', authenticate, authController.getAllUsers);
// router.post('/user/favorites', authenticate, authController.addToFavorites);
// router.get('/user/favorites', authenticate, authController.getFavorites);
// router.delete('/user/favorites/:productId', authenticate, authController.removeFromFavorites);
// router.put('/user/:userId', authenticate, authController.editUser);
// router.delete('/user/:userId', authenticate, authController.deleteUser);

// router.put('/changePassword/:userId', authenticate, authController.changePassword)