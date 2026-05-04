export const authClient = {
  async updateUser(updateProfile, values) {
    return updateProfile({
      name: values.name,
      photo: values.image,
    });
  },
};
