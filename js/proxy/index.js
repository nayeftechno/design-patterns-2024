const user = {
  email: "user@user.com",
  password: "user_P@ssw0rd",
};

const proxy = new Proxy(user, {
  set(target, property, value) {
    return Reflect.set(target, property, value);
  },
  get(target, property) {
    return Reflect.get(target, property);
  },
});

export default proxy;
