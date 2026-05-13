"use client";

import Image from "next/image";
import { useState } from "react";
import gems from "@/public/images/icons/gem-image.png";
import diamond from "@/public/images/icons/diamond.png";
import freeze from "@/public/images/icons/freeze.png";
import pass from "@/public/images/icons/pass.png";
import pause from "@/public/images/icons/pause.png";
import heart from "@/public/images/icons/red.png";
import { StaticImageData } from "next/image";
import { RiVipDiamondFill } from "react-icons/ri";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const GemsData = [
  { amount: 100, price: "$20", label: "Best Value" },
  { amount: 500, price: "$80", label: "Best Value" },
  { amount: 1000, price: "$150", label: "Best Value" },
  { amount: 100, price: "$20", label: "Best Value" },
];

interface TokenItem {
  icon: StaticImageData;
  name: string;
  desc: string;
  gems: number;
  coins: number;
}

const TokensData: TokenItem[] = [
  { icon: heart,  name: "Extra Life",    desc: "Get an extra chance if you answer wrong.",        gems: 30, coins: 2 },
  { icon: pause,  name: "Pause",         desc: "Pause the quiz timer and take a breather.",        gems: 30, coins: 2 },
  { icon: pass,   name: "Pass",          desc: "Skip a tough question and move to the next one.",  gems: 30, coins: 2 },
  { icon: freeze, name: "Streak Freeze", desc: "Protect your win streak from being broken.",       gems: 30, coins: 2 },
];

const CountUpdate = ({
  value,
  onAdd,
  onMinus,
}: {
  value: number;
  onAdd: () => void;
  onMinus: () => void;
}) => (
  <div className="flex items-center gap-4 bg-linear-to-r from-[#7AF6FC] to-[#9253E6] rounded-full  shadow-[0_0_10px_rgba(0,152,255,0.5)] p-1 relative">
    <button
      onClick={onMinus}
      className="w-6 h-6 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
      −
    </button>
    <span className="text-white font-bold text-base w-6 text-center">{value}</span>
    <button
      onClick={onAdd}
      className="w-6 h-6 rounded-full bg-white text-black font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
    >
      +
    </button>
  </div>
);

const Shop = () => {
  const [quantities, setQuantities] = useState<number[]>(TokensData.map(() => 0));
  const [gemQty, setGemQty] = useState<number[]>(GemsData.map(() => 0));
  const [showCart, setShowCart] = useState(false);

  const increment = (i: number) =>
    setQuantities((prev) => prev.map((q, idx) => (idx === i ? q + 1 : q)));
  const decrement = (i: number) =>
    setQuantities((prev) => prev.map((q, idx) => (idx === i ? Math.max(0, q - 1) : q)));

  const incrementGem = (i: number) =>
    setGemQty((prev) => prev.map((q, idx) => (idx === i ? q + 1 : q)));
  const decrementGem = (i: number) =>
    setGemQty((prev) => prev.map((q, idx) => (idx === i ? Math.max(0, q - 1) : q)));

  const cartItems = TokensData.map((t, i) => ({ ...t, qty: quantities[i] })).filter((t) => t.qty > 0);
  const cartGems  = GemsData.map((g, i) => ({ ...g, qty: gemQty[i] })).filter((g) => g.qty > 0);

  const totalQty   = cartItems.reduce((s, t) => s + t.qty, 0) + cartGems.reduce((s, g) => s + g.qty, 0);
  const totalGems  = cartItems.reduce((s, t) => s + t.gems  * t.qty, 0);
  const totalCoins = cartItems.reduce((s, t) => s + t.coins * t.qty, 0);
  const totalGemPrice  = cartGems.reduce((s, g) => s + parseFloat(g.price.replace("$", "")) * g.qty, 0);

  const hasCartItems = cartItems.length > 0 || cartGems.length > 0;

// View Cart 
  if (showCart) {
    return (
      <div className="py-10 lg:px-14 px-6">
        {/* Back + heading */}
        <div className="flex items-center gap-2 text-white transition-colors mb-2">
          <ChevronLeft onClick={() => setShowCart(false)} size={24} className="bg-primary-gradient rounded-full hover:bg-blue-800 " />
          <h1 className="text-3xl font-bold">View Cart</h1>
        </div>
        <p className="text-zinc-400 text-sm mb-8">
          Boost your quiz power! Gems and tokens are in the cart, time to choose your payment mode.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/*Left Section*/}
          <div className="flex-1 space-y-3">
            {/* Gems in cart */}
            {cartGems.length > 0 && (
              <>
                <p className="text-white font-semibold mb-2">Gems</p>
                {cartGems.map((gem, i) => {
                  const origIdx = GemsData.findIndex(
                    (g) => g.amount === gem.amount && g.price === gem.price
                  );
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-[#0a0f1e] border border-[#1e3a6e] rounded-2xl px-5 py-2"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10   shrink-0">
                          <Image src={diamond} alt="gem" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-xl">{gem.amount} Gems</p>
                          <div className="flex items-center gap-1 text-lg font-semibold mt-0.5">
                            <span className="text-zinc-400 text-sm">Unit price:</span>
                            <span className="text-white ml-1">{gem.price}</span>
                            <span className="text-zinc-500 mx-1">·</span>
                            <span className="text-white">
                              ${(parseFloat(gem.price.replace("$", "")) * gem.qty).toFixed(0)} total
                            </span>
                          </div>
                        </div>
                      </div>
                      <CountUpdate
                        value={gem.qty}
                        onAdd={() => incrementGem(origIdx)}
                        onMinus={() => decrementGem(origIdx)}
                      />
                    </div>
                  );
                })}
              </>
            )}

            {/* Tokens in cart */}
            {cartItems.length > 0 && (
              <>
                <p className="text-white font-semibold mb-2 mt-4">Tokens</p>
                {cartItems.map((token, i) => {
                  const origIdx = TokensData.findIndex((t) => t.name === token.name);
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-[#0a0f1e] border border-[#1e3a6e] rounded-2xl px-5 py-2 relative"
                    >
                      {/* Icon + name + price */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 shrink-0">
                          <Image src={token.icon} alt={token.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-xl">{token.name}</p>
                          <div className="flex items-center gap-1 text-2xl font-semibold mt-0.5">
                            <RiVipDiamondFill className="text-blue-400" />
                            <span className="text-white">{token.gems * token.qty}</span>
                            <span className="text-zinc-500 mx-1">/</span>
                            <span>💰</span>
                            <span className="text-white">{token.coins * token.qty}</span>
                          </div>
                        </div>
                      </div>
                      {/* CountUpdate */}
                      <CountUpdate
                        value={token.qty}
                        onAdd={() => increment(origIdx)}
                        onMinus={() => decrement(origIdx)}
                      />
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/*Right Section*/}
          <div className="lg:w-120 shrink-0">
            <p className="text-white font-semibold mb-3">Price details</p>
            <div className="shadow-[0_0_10px_rgba(0,152,255,0.5)] border border-[#1e3a6e] rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 px-4 py-2 border-b border-[#1e3a6e] text-zinc-400 text-xs font-semibold uppercase tracking-wide">
                <span>Items</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>

              {/* Gem rows */}
              {cartGems.map((gem, i) => (
                <div key={`gem-${i}`} className="grid grid-cols-3 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Image src={diamond} alt="" width={18} height={18} className="object-contain" />
                    <span className="text-white">{gem.amount} Gems</span>
                  </div>
                  <span className="text-white text-center">{gem.qty}</span>
                  <div className="flex items-center justify-end gap-1 font-semibold">
                    <span className="text-white">
                      ${(parseFloat(gem.price.replace("$", "")) * gem.qty).toFixed(0)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Token rows */}
              {cartItems.map((token, i) => (
                <div key={`token-${i}`} className="grid grid-cols-3 px-4 py-2 ">
                  <div className="flex items-center gap-2">
                    <Image src={token.icon} alt="" width={18} height={18} className="object-contain" />
                    <span className="text-white ">{token.name}</span>
                  </div>
                  <span className="text-white text-center">{token.qty}</span>
                  <div className="flex items-center justify-end gap-1  font-semibold">
                    <RiVipDiamondFill className="text-blue-400" />
                    <span className="text-white">{token.gems * token.qty}</span>
                    <span className="text-zinc-500">/</span>
                    <span>💰</span>
                    <span className="text-white">{token.coins * token.qty}</span>
                  </div>
                </div>
              ))}

              {/* Total row */}
              <div className="grid grid-cols-3 mx-4 mt-2 py-2 border-dashed border-t font-bold">
                <span className="text-white">Total</span>
                <span className="text-white text-center">{totalQty}</span>
                <div className="flex flex-col items-end gap-0.5 font-bold">
                  {totalGemPrice > 0 && (
                    <span className="text-white">${totalGemPrice.toFixed(0)}</span>
                  )}
                  {(totalGems > 0 || totalCoins > 0) && (
                    <div className="flex items-center gap-1">
                      <RiVipDiamondFill className="text-blue-400" />
                      <span className="text-white">{totalGems}</span>
                      <span className="text-zinc-500">/</span>
                      <span>💰</span>
                      <span className="text-white">{totalCoins}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Payment buttons */}
            <div className="flex gap-3 mt-5">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-b from-[#3494E1] to-[#9253E6] hover:brightness-110 transition-all text-white font-semibold text-sm">
                <RiVipDiamondFill />
                Pay with Gems
                <ArrowRight size={20} />
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-[#3494E1] to-[#9253E6] hover:brightness-110 transition-all text-white font-semibold text-sm">
                <span>💰</span>
                Pay with Money
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Shop Page
  return (
    <div className="py-10 lg:px-14 px-6">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3">
        <div className="w-full h-44 rounded-2xl bg-red-300 overflow-hidden">
          <Image  src={gems} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="text-end lg:w-300 space-y-3">
          <h1 className="text-5xl font-bold">
            Welcome to the <br />
            <span className="text-blue-300">SportsDuel</span> Shop
          </h1>
          <p>
            Unlock power-ups and boost your game! Buy gems and tokens to stay ahead in every quiz challenge.
          </p>
        </div>
      </div>

      {/* Gems */}
      <div className="mt-20">
        <h1 className="text-4xl font-bold text-blue-300">Stock Up on Gems</h1>
        <p className="text-sm">
          Use gems to buy life, pause, pass, and other boosts. The more gems you have, the stronger your game becomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {GemsData.map((item, i) => (
            <div key={i} className="border border-zinc-600 p-1 rounded-2xl relative">
              <div className="w-16 absolute z-20 -top-8 -left-5 -rotate-45">
                <Image src={diamond} alt="" />
              </div>
              <div className="relative bg-black rounded-2xl border border-zinc-800 p-4 pt-10 flex flex-col overflow-hidden">
                <span className="absolute top-3 right-3 bg-zinc-800 text-white text-[15px] font-semibold px-2 py-0.5 rounded-lg">
                  SAVE 20%
                </span>
                <div>
                  <p className="text-white text-5xl font-black leading-none">
                    {item.amount} <span className="text-base font-semibold">Gems</span>
                  </p>
                  <p className="text-zinc-500 text-[10px] mt-0.5">{item.label}</p>
                </div>
                <div className="flex items-center mt-3 justify-between">
                  <span className="text-white text-4xl font-black">{item.price}</span>
                  <button
                    onClick={() => {
                      setGemQty((prev) => prev.map((q, idx) => (idx === i ? Math.max(1, q) : q)));
                      setShowCart(true);
                    }}
                    className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] hover:brightness-110 text-white pt-1 h-10 font-semibold px-6 rounded-full transition-all"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tokens heading */}
      <div className="text-end my-20 space-y-2">
        <h1 className="text-4xl font-bold text-blue-300">Stay in Control with Tokens</h1>
        <p className="text-sm">
          Whether you need more time, a second chance, or a safety net — these tokens have got your back.
        </p>
      </div>

      {/* Token cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {TokensData.map((token, i) => {
          const qty = quantities[i];
          const isSelected = qty > 0;
          return (
            <div
              key={i}
              className={`bg-black rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden transition-all duration-300
                ${isSelected
                  ? "border-2 border-blue-500 shadow-[0_0_18px_rgba(0,152,255,0.45)]"
                  : "border border-zinc-800"
                }`}
            >
              <span className="absolute top-1 left-3 text-white text-lg">✦</span>
              <div className="flex pl-2 items-center gap-3">
                <span className="w-14"><Image src={token.icon} alt="" /></span>
                <h2 className="text-white text-3xl font-bold">{token.name}</h2>
              </div>
              <p className="text-sm leading-relaxed">{token.desc}</p>
              <hr className="border-blue-300 w-20" />
              <div className="flex items-center justify-between mt-auto pt-1">
                <div className="flex items-center gap-1.5 text-2xl font-semibold text-white">
                  <span className="w-8 -mt-2"><Image src={diamond} alt="" /></span>
                  <span>{token.gems}</span>
                  <span className="text-zinc-500">/</span>
                  <span>💰</span>
                  <span>{token.coins}</span>
                </div>
                {!isSelected ? (
                  <button
                    onClick={() => increment(i)}
                    className="bg-linear-to-r from-[#0098FF] to-[#0060cc] hover:brightness-110 transition-all text-white font-bold px-10 py-1.5 rounded-full"
                  >
                    Buy
                  </button>
                ) : (
                  <CountUpdate value={qty} onAdd={() => increment(i)} onMinus={() => decrement(i)} />
                )}
              </div>
            </div>
          );
        })}

      {/* View Cart sticky bar — appears when cart has items */}
      {hasCartItems && (
        <div className="">
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-3 bg-linear-to-r from-[#0098FF] to-[#0060cc] hover:brightness-110 transition-all text-white font-bold px-8 py-2 rounded-full "
          >
            View Cart
           <ChevronRight/>
          </button>
        </div>
      )}
      </div>
    </div>
  );
};
export default Shop;
