export default function Home() {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-950">
        <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            ShelfWise
          </p>
  
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            Catálogo inteligente de produtos
          </h1>
  
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Uma interface simples, responsiva e profissional para listar produtos
            consumidos de uma API real com paginação.
          </p>
        </section>
      </main>
    );
  }