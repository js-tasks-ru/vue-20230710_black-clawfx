import { ref, computed, unref } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
  return (...args) => {
    const refs = args.map(arg => {
      return arg;
    });

    return computed(() => func(...refs.map(arg => unref(arg))));
  };
}
