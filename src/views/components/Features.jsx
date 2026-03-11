export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-y border-stone reveal">
      <div className="p-8 md:py-8 md:px-10 border-b md:border-b-0 md:border-r border-stone">
        <div className="serif text-[2rem] text-accent mb-2">01</div>
        <div className="text-[.8rem] font-medium mb-1">Organic Cotton</div>
        <div className="text-[.75rem] text-mid leading-[1.6]">Certified GOTS organic. Soft on skin, easy on the planet.</div>
      </div>
      <div className="p-8 md:py-8 md:px-10 border-b md:border-b-0 md:border-r border-stone">
        <div className="serif text-[2rem] text-accent mb-2">02</div>
        <div className="text-[.8rem] font-medium mb-1">Built to Last</div>
        <div className="text-[.75rem] text-mid leading-[1.6]">Reinforced seams and durable fabrics that survive real adventures.</div>
      </div>
      <div className="p-8 md:py-8 md:px-10 border-stone">
        <div className="serif text-[2rem] text-accent mb-2">03</div>
        <div className="text-[.8rem] font-medium mb-1">Free Returns</div>
        <div className="text-[.75rem] text-mid leading-[1.6]">30-day free returns. No questions, no fuss.</div>
      </div>
    </div>
  );
}
