import CanvasItem from '../components/CanvasItem';

export default function CanvasList({ filteredData, isGridView, onDelete }) {
  return (
    <>
      {filteredData.length && (
        <div
          className={`grid gap-6  ${!isGridView ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {filteredData.map(item => (
            <CanvasItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              date={item.date}
              onDelete={e => {
                e.preventDefault(); //기본동작을 막는 메서드
                // e.stopPropagation //이벤트 전파를 막는 메서드
                onDelete(item.id);
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {filteredData.length === 0
            ? '목록이 없습니다.'
            : filteredData.length === 0
              ? '검색 결과가 없습니다.'
              : ''}
        </p>
      </div>
    </>
  );
}
