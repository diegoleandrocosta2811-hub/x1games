import { StoreActions } from "@/components/shared/StoreActions";
import { Container } from "@/components/ui/Container";
import { stores } from "@/data/stores";
import { isPlaceholder } from "@/lib/placeholders";

function displayName(store: (typeof stores)[number]) {
  if (store.id === "tatui-1") return "X1 Tatuí — Unidade 1";
  if (store.id === "tatui-2") return "X1 Tatuí — Unidade 2";
  return store.name;
}

export function Stores() {
  return (
    <section
      id="lojas"
      className="border-t border-white/5 bg-black py-24"
      aria-labelledby="lojas-titulo"
    >
      <Container>
        <h2
          id="lojas-titulo"
          className="text-center text-[32px] font-semibold tracking-tight text-white sm:text-[40px]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Encontre uma X1
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[17px] text-zinc-400">
          Matriz em Sorocaba e duas unidades em Tatuí.
        </p>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {stores.map((store) => (
            <div key={store.id} className="text-center">
              <h3 className="text-[21px] font-semibold text-white">
                {displayName(store)}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {store.city}/{store.state}
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                {isPlaceholder(store.address)
                  ? "Endereço em atualização neste site."
                  : store.address}
              </p>
              <div className="mt-4 flex justify-center">
                <StoreActions store={store} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
