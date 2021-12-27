
const Home = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 px-2">     
      {/**
       * grid-rows : 요소의 행 배치 
       * grid-cols : 요소의 열 배치
       * col-span : 열 합치기
       * row-span : 행 합치기
       * col-start-{n} , col-end-{n} : 시작 , 종료 지정
       * grid-flow-row-dense : 자동 배치 
       */}
      <section className="mb-8 pb-8 border-b border-gray-300">
        <div className="mb-8">
          <label className="block mb-2 text-gray-500">Logo</label>
          <div className="flex items-end">
            <div className="flex w-60 h-40 justify-center items-center border border-slate-300 rounded-md border-dashed">image</div>
            <button className="ml-3 p-3 text-sm rounded-md border border-gray-300">Change</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 mb-5">
          <div>
            <label className="block mb-2 text-gray-500">Name</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/> 
          </div>
          <div>
            <label className="block mb-2 text-gray-500">Slug</label>          
            <input type="text" className="w-full border rounded-md border-gray-300"/> 
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <select class="w-full border rounded-md border-gray-300">
              <option>korea</option>
            </select>        
          </div>
          <div>
            <label className="block mb-2 text-gray-500">Marketing Type</label>
            <select class="w-full border rounded-md border-gray-300">
              <option>korea</option>
            </select>        
          </div>  
          <div>
            <label className="block mb-2 text-gray-500">Status</label>
            <select class="w-full border rounded-md border-gray-300">
              <option>korea</option>
            </select>        
          </div>                            
        </div>
      </section>
      <section className="mb-8 pb-8 border-b border-gray-300">
       <div class="grid grid-cols-1 gap-4 sm:gap-1">
          <div>
            <label className="block mb-2 text-gray-500">Description</label>
            <textarea className="w-full border rounded-md border-gray-300"/> 
          </div>
          <div>
            <label className="block mb-2 text-gray-500">Body</label>          
            <textarea className="w-full h-60 border rounded-md border-gray-300"/> 
          </div>
        </div>        
      </section>
      <section>
        <h2 className="mb-4">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-5 mb-5">
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/>      
          </div>    
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/>      
          </div>   
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/>      
          </div>   
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/>      
          </div>   
          <div>
            <label className="block mb-2 text-gray-500">Country</label>
            <input type="text" className="w-full border rounded-md border-gray-300"/>      
          </div>                                                 
        </div>
      </section>
    </div>
  );
};

export default Home;