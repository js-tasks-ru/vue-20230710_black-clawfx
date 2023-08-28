import { ref, computed } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
  return (...args) => {
    const refs = args.map(arg => {
      if (arg instanceof Object && arg.hasOwnProperty('value')) {
        return arg;
      }
      return ref(arg);
    });

    return computed(() => func(...refs.map(r => r.value)));
  };
}
