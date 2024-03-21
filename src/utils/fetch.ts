import { ref, toValue } from 'vue';

const useFetch = (url: string, options?: RequestInit) => {
  const data = ref<[]>([]);
  const error = ref(null);

  // toValue() esegue l'estrazione di potenziali ref o getter
  fetch(toValue(url), options)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
};

export default useFetch;
