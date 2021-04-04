import bcrypt from 'bcrypt';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

function initialize(passport, getUserByName, getUserById) {
  const authenticateUser = async (username, password, done) => {
    const user = await getUserByName(username);

    if (user == null) {
      return done(null, false, { message: 'No user' });
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      }
      return done(null, false, { message: 'Password or username incorrect' });
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    done(null, getUserById(id));
  });
}
export default initialize;
