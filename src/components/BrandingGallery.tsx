'use client';

import React, { useState } from 'react';
import * as Assets from './BrandingAssets';
import { Copy, Check } from 'lucide-react';

const icons = [
  { name: 'Замена масла', component: Assets.OilChangeIcon, key: 'OilChangeIcon' },
  { name: 'Шиномонтаж', component: Assets.TireServiceIcon, key: 'TireServiceIcon' },
  { name: 'Тормозные колодки', component: Assets.BrakePadsIcon, key: 'BrakePadsIcon' },
  { name: 'Ремонтные работы', component: Assets.RepairWorksIcon, key: 'RepairWorksIcon' },
  { name: 'Аккумулятор', component: Assets.BatteryIcon, key: 'BatteryIcon' },
  { name: 'Туалетная комната', component: Assets.RestroomIcon, key: 'RestroomIcon' },
  { name: 'Касса', component: Assets.CashDeskIcon, key: 'CashDeskIcon' },
  { name: 'Выдача заказов', component: Assets.HandingOverIcon, key: 'HandingOverIcon' },
  { name: 'Приемка автомобилей', component: Assets.CarReceivingIcon, key: 'CarReceivingIcon' },
];

const BrandingGallery = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (id: string) => {
    const svgElement = document.getElementById(`icon-${id}`);
    if (svgElement) {
      // Find the actual <svg> inside the wrapper
      const actualSvg = svgElement.querySelector('svg');
      if (actualSvg) {
        // Clone to avoid modifying the displayed one if we need to clean it up
        const clone = actualSvg.cloneNode(true) as SVGElement;
        // Remove React-added classes if necessary, but here we'll just copy the outerHTML
        navigator.clipboard.writeText(clone.outerHTML);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    }
  };

  return (
    <section id="branding" className="py-24 bg-[#1D1D1D] text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-sm font-museo-900 text-primary mb-4">Фирменный стиль</h2>
          <h3 className="text-4xl md:text-5xl font-museo-900 text-white leading-tight">
            СЕРВИСНЫЕ <span className="text-primary italic">ПИКТОГРАММЫ</span>
          </h3>
          <p className="text-white/40 mt-6 max-w-2xl font-museo-300">
            Набор фирменных иконок ROLF Service. Строгое соблюдение толщины линий (2.5pt) и цветовой палитры.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {icons.map((icon) => (
            <div key={icon.key} className="flex flex-col items-center p-6 bg-white/5 rounded-sm border border-white/10 group">
              <div className="w-24 h-24 mb-6" id={`icon-${icon.key}`}>
                <icon.component className="w-full h-auto" />
              </div>
              <span className="text-xs font-museo-900 text-white/60 mb-4 text-center h-8 flex items-center">
                {icon.name}
              </span>
              <button
                onClick={() => copyToClipboard(icon.key)}
                className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors"
              >
                {copiedId === icon.key ? (
                  <>
                    <Check size={14} />
                    <span>Скопировано</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Копировать SVG</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingGallery;
