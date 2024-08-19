"use client";

import { useEffect, useState } from "react";
import { HOST_URL } from "@/lib/globals";
import Image from "next/image";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page({ params }: any) {
  const [product, setProduct] = useState({
    data: {
      product_id: "Carregando...",
      product_name: "Carregando...",
      product_description: "Carregando...",
      product_max_stock: "Carregando...",
      product_min_stock: "Carregando...",
      product_quantity_in_stock: "Carregando...",
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const items = [
    { title: "Nome do produto", value: product.data.product_name },
    {
      title: "Quantidade em estoque",
      value: product.data.product_quantity_in_stock,
    },
    { title: "Quantidade máxima", value: product.data.product_max_stock },
    { title: "Quantidade mínima", value: product.data.product_min_stock },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${HOST_URL}/products/${params?.id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params?.id]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: erro</div>;
  }

  return (
    <section className="w-full">
      {/* <Navbar title="teste" /> */}
      <div className="z-10 w-full max-w-4xl justify-between text-sm lg:flex flex-col gap-10 py-10 px-10 mx-auto">
        <h1 className="text-4xl">Informações do produto</h1>
        <div className="flex flex-row space-x-4">
          <Image
            src="https://avatars.githubusercontent.com/u/39890456?v=4"
            width={400}
            height={400}
            alt="Profile image"
          />
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                value={item.value}
                params={params?.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  title,
  value,
  params,
  product,
}: {
  title: string;
  value: string;
  params: string;
  product: any;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.target.value);
  };

  useEffect(() => {
    console.log("currentValue", currentValue);
  }, [currentValue]);

  async function handleSubmit(form: FormData) {
    let product_name = form.get(title);

    fetch(`${HOST_URL}/products/${params}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.data.product_id,
        product_name: "Hammer",
        product_description: "A big steel hammer",
        product_quantity_in_stock: 120,
        product_max_stock: 420,
        product_min_stock: 25,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form
      className="inline-flex bg-zinc-50 px-6 py-2 rounded-lg justify-between items-center max-h-[60px] gap-4"
      action={handleSubmit}
    >
      <div className="flex flex-col space-y-1">
        <label htmlFor="idade" className="text-gray-600 font-semibold">
          {title}
        </label>
        {isEditing ? (
          <input
            type="text"
            name={title}
            value={currentValue}
            onChange={handleInputChange}
            className="text-gray-800 font-medium max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
          />
        ) : (
          <span className="text-gray-800 font-medium max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
            {currentValue}
          </span>
        )}
      </div>
      {isEditing ? (
        <button type="submit" className="text-blue-500">
          Save
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="text-blue-500"
        >
          <Edit />
        </button>
      )}
    </form>
  );
}
