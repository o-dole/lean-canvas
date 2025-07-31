import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../components/Button';

export default function About() {
  const queryClient = useQueryClient();

  //조회
  const { isLoading, error, data } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases').then(res => res.data),
    initialData: [],
  });

  //등록 (업데이트)
  const { mutate: createNewCanvas, isLoding: isLoadingCreate } = useMutation({
    mutationFn: newCanvas =>
      axios.post('http://localhost:8000/canvases', newCanvas),
    onSuccess: () => {
      queryClient.invalidateQueries(['canvases']);
    },
  });

  const handleCreate = () => {
    createNewCanvas({ title: 'new Canvas' });
  };

  return (
    <>
      <h2 className="text-3xl">UseQuery</h2>
      {isLoading && <p>...Loading</p>}
      {error && <p>{error.message}</p>}
      {data.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}

      <h2 className="text-3xl">UseMutation</h2>
      {isLoadingCreate && <p>...loading</p>}
      <Button onClick={handleCreate}>등록</Button>
    </>
  );
}
