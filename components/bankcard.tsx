import Link from "next/link";
import React from "react";
import { formatAmount } from "../lib/utils";
import Image from "next/image";

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card-content">
          <div className="p-5">
            <h1 className="text-16 text-bold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col mt-4">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white pl-7">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">&#x2022;&#x2022;/&#x2022;&#x2022;</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white p-7 pr-10">
            &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; 1234<span className="text-16">{account.mask}</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
          />
        </div>
        <Image src="/icons/lines.png" className="absolute top-0 left-0" width={316} height={190} alt="lines"/>
      </Link>
    </div>
  );
};

export default BankCard;
