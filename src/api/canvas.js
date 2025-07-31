import { canvases } from './http';
import dayjs from 'dayjs';

//목록 조회
export async function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'lastModified',
      _order: 'desc',
    },
    params,
  );
  const { data } = await canvases.get('/', { params: payload });
  return data;
}

//등록
export function createCanvas() {
  const newCanvas = {
    title: crypto.randomUUID().substring(0, 4) + '_new Lean Canvas',
    lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return canvases.post('/', newCanvas);
}

//삭제
export async function deleteCanvas(id) {
  await canvases.delete(`/${id}`);
}

export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

export async function updateTitle(id, title) {
  /**
   * post - 새로운 자원 생성
   * put - 기존 자원 전체 업데이트 또는 새 자원 생성
   * patch - 일부 수정
   */
  await canvases.patch(`/${id}`, { title });
}

export async function updateCanvas(id, canvas) {
  await canvases.put(`/${id}`, canvas);
}
