import { clearContent } from '../utils/contentManipulate.js';
import { ajax } from '../utils/ajax.js';
import { createAuth, addInputListeners, loginSubmit } from '../components/auth/auth.js';

export function loginPage(warning = false) {
  const content = clearContent();

  const authContent = document.createElement('div');
  authContent.classList.add('login-content');
  const div = document.createElement('div');
  div.classList.add('login');

  const loginInvitation = document.createElement('div');
  loginInvitation.classList.add('login__invitation');
  loginInvitation.textContent = 'Войти';
  div.appendChild(loginInvitation);

  const signupInvitation = document.createElement('a');
  signupInvitation.href = '/signup';
  signupInvitation.dataset.section = 'signup';
  signupInvitation.textContent = 'Зарегистрироваться';

  const form = createAuth(true);
  addInputListeners(form);
  const loginBtn = form.submitBtn;
  loginBtn.addEventListener('click', loginSubmit );

  div.appendChild(form);
  div.appendChild(signupInvitation);

  content.appendChild(div);
}
