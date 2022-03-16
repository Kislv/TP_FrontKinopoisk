import {OK, CREATED, AJAX_METHODS} from './consts.js';

/**
 * @description Класс, реализующий Fetch API.
 * Позволяет совершать GET и POST запросы,
 * защищённые при помощи CORS.
 */
export class Ajax {
  /**
   * @param { Array } args Аргументы, с которыми будет отправлен GET-запрос
   * @return { Object } Ответ на запрос (полученный в виде json)
   * @description Совершает GET-запрос, реализует Fetch API.
   * Поддерживает CORS.
   */
  getFetch(args = {}) {
    let statusCode;

    return fetch(args.url, {
      method: AJAX_METHODS.GET,
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      statusCode = response.status;
      return response.json();
    }).then((parsedBody) => {
      return {
        status: statusCode,
        parsedBody,
      };
    }).catch((parsedBody) => {
    });
  }

  /**
   * @param { Array } args Аргументы, с которыми будет отправлен POST-запрос
   * @return { Object } Ответ на запрос (полученный в виде json)
   * @description Совершает POST-запрос, реализует Fetch API.
   * Поддерживает CORS.
   */
  postFetch(args = {}) {
    let statusCode;
    return fetch(args.url, {
      method: AJAX_METHODS.POST,
      body: JSON.stringify(args.body),
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      statusCode = response.status;
      if (statusCode === OK || statusCode === CREATED) {
        console.log(response);
        console.log(response.body);
        let result = {};
        try {
          result = response.json();
        } catch(e) {
          console.log("Catch");
        }
        return result;
      }
      return response;
    }).then((parsedBody) => {
      return {
        status: statusCode,
        parsedBody,
      };
    }).catch(console.error);
  }
}
window.Ajax = new Ajax();
