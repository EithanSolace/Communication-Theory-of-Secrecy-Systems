import React from 'react';
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Communication Theory of Secrecy Systems",
    content: (
      <div className="flex flex-col justify-center items-start text-left py-12 border-l-8 border-[#d9232e] pl-8 md:pl-16">
        <div className="mb-8">
            <p className="text-[#d9232e] font-bold uppercase tracking-widest text-sm mb-4">Seminar Presentation</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 font-serif">
              Communication Theory of<br/>Secrecy Systems
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 italic font-serif max-w-2xl">
              "A Deep Dive into Claude Shannon’s 1949 Masterpiece"
            </h2>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 w-full max-w-md">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Presented By</p>
            <p className="text-2xl font-serif text-gray-900">Yuheng Yan</p>
            <p className="text-sm text-gray-400 mt-4 italic">Bell System Technical Journal, Vol. 28</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Introduction & Historical Context",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div className="flex flex-col justify-center space-y-4">
            <div>
                <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#d9232e] pl-4 mb-2">The Genesis</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Cryptography transitioned from an art form grounded in linguistics and intuition to a rigorous science based on <strong>Mathematics</strong> and <strong>Statistics</strong>.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 border-l-4 border-[#d9232e] pl-4 mb-2">Kerckhoffs's Principle</h3>
                <p className="text-lg text-gray-700 leading-relaxed italic bg-gray-50 p-3 border border-gray-200">
                    "The enemy knows the system."
                </p>
                <p className="text-sm text-gray-600 mt-1">Security must reside solely in the <strong>Key</strong>.</p>
            </div>
        </div>
        <div className="bg-gray-50 p-6 border border-gray-200 shadow-sm flex flex-col justify-center h-full">
            <h3 className="font-bold text-gray-900 mb-3 text-center uppercase tracking-widest text-sm">The Fundamental Goal</h3>
            <p className="text-center text-gray-700 text-lg">
                Modeling cryptography as a <br/><span className="font-bold text-[#d9232e]">Communication System</span><br/> where the Key acts as noise.
            </p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Mathematical Model of Secrecy Systems",
    subtitle: "Part I: System Algebra",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          Shannon formalizes the cryptographic process as a set of transformations. A system is defined by a family of transformations $T_i$ applied to the message space $M$.
        </p>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 mt-8 border-t border-gray-200 pt-8">
            <div className="flex-1">
                <strong className="block text-gray-900 mb-2 text-lg">Algebra of Systems</strong>
                <p className="text-gray-600">Complex ciphers can be described by combining simple systems via weighted sums $+$ and products $*$.</p>
            </div>
            <div className="flex-1">
                <strong className="block text-gray-900 mb-2 text-lg">Pure Systems</strong>
                <p className="text-gray-600">Systems where the set of transformations is homogeneous—all keys are essentially equivalent in security.</p>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Theoretical Limits: Perfect Secrecy",
    subtitle: "Part II: Information Theory",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white p-8 border-2 border-gray-100 shadow-sm flex flex-col">
          <div className="flex-1">
             <h3 className="text-[#d9232e] font-bold tracking-widest text-xs uppercase mb-4">Definition</h3>
             <div className="text-3xl text-center py-6 font-serif">
               $$ P(M|E) = P(M) $$
             </div>
          </div>
          <p className="text-gray-700 text-center text-sm mt-4">
            The <em>posteriori</em> probability of the message given the cryptogram is equal to the <em>priori</em> probability. The ciphertext reveals <strong>zero</strong> information.
          </p>
        </div>
        
        <div className="bg-gray-900 text-white p-8 shadow-md flex flex-col">
          <div className="flex-1">
            <h3 className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4">Shannon's Theorem (The Cost)</h3>
            <div className="text-3xl text-center py-6 font-serif">
             $$ H(K) \ge H(M) $$
            </div>
          </div>
           <p className="text-gray-300 text-center text-sm mt-4">
             For perfect secrecy, the entropy of the key must be at least the entropy of the message.
           </p>
        </div>

        <div className="md:col-span-2 text-center mt-4">
            <p className="text-gray-500 italic font-serif">
                Implication: The One-Time Pad is the only perfectly secret cipher, but requires a key as long as the message.
            </p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Why Ciphers are Breakable",
    subtitle: "Equivocation & Redundancy",
    content: (
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-gray-300 pl-5 py-1">
                <span className="block font-bold text-[#d9232e] mb-1">Equivocation $H_E(K)$</span>
                <span className="text-gray-700">The uncertainty of the key given the ciphertext. As $N$ (intercepted text) increases, this value drops.</span>
            </div>
            <div className="border-l-2 border-gray-300 pl-5 py-1">
                <span className="block font-bold text-[#d9232e] mb-1">Redundancy $D$</span>
                <span className="text-gray-700">Natural language structure constraints the possible solutions, acting as a "filter" for incorrect keys.</span>
            </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-none border border-gray-300 text-center">
             <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">The Unicity Distance Formula</p>
             <div className="text-3xl font-serif text-gray-900 mb-3">
                {'$$ N \\approx \\frac{H(K)}{D} $$'}
             </div>
             <p className="text-gray-600 max-w-xl mx-auto italic text-sm">
                 The point where the number of valid keys reduces to approximately 1. Beyond this length $N$, the cipher is theoretically breakable.
             </p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Practical Secrecy: The Work Characteristic",
    subtitle: "Part III: Computational Security",
    content: (
      <div className="mb-4">
        <p className="text-lg text-gray-700">
            Since perfect secrecy is impractical, we rely on <strong>Computational Safety</strong>. We define safety not by "possibility" but by "work required" ($W$).
        </p>
        <div className="mt-4 p-4 border-l-4 border-gray-900 bg-gray-50 text-gray-800 italic">
            <strong>The Max-Min Principle:</strong> Maximize the minimum work the enemy must perform to break the system.
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "The Two Pillars of Modern Design",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 h-96 mt-4">
          <div className="bg-white p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Diffusion</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Dissipating the statistical structure of the plaintext over long range of ciphertext.</p>
              <ul className="text-sm text-gray-500 space-y-2 list-none">
                  <li>— Avalanche Effect</li>
                  <li>— Permutations / Transpositions</li>
                  <li>— "Spreading the influence"</li>
              </ul>
          </div>
          <div className="bg-white p-8 flex flex-col justify-center hover:bg-gray-50 transition-colors">
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Confusion</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Making the relationship between the key and the ciphertext as complex as possible.</p>
              <ul className="text-sm text-gray-500 space-y-2 list-none">
                  <li>— Substitution Boxes (S-Boxes)</li>
                  <li>— Non-linear functions</li>
                  <li>— Functional Complexity</li>
              </ul>
          </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Engineering a Strong Cipher",
    subtitle: "Mixing Transformations",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="bg-[#fff9f9] border-l-4 border-[#d9232e] p-6">
                <h3 className="font-bold text-[#d9232e] mb-2">The Metaphor</h3>
                <p className="text-gray-800">
                    <strong>"Mixing Pastry Dough"</strong>: A good mixing transformation distributes a message region (dough) evenly throughout the ciphertext space.
                </p>
            </div>
             <p className="text-gray-600 text-sm leading-relaxed">
                Shannon visualized this as a map that stretches the space in one direction and folds it over, similar to the <strong>Baker's Map</strong>.
            </p>
            <p className="text-gray-500 text-xs italic border-t border-gray-100 pt-4">
                Legacy: This $T-F-S$ structure is the ancestor of the modern SP-Network (AES).
            </p>
        </div>
        <div className="flex flex-col items-center w-full">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Baker%27s_map_mixing.gif" 
                alt="Baker's Map Mixing Animation" 
                className="max-w-full h-auto border border-gray-200 shadow-sm"
                referrerPolicy="no-referrer"
            />
            <p className="text-xs text-gray-500 mt-2 italic">
                Source: Wikipedia (Baker's map)
            </p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Attacks & Validation",
    content: (
      <div className="space-y-6 mt-4">
        <div className="flex items-start p-6 border border-gray-200 shadow-sm bg-white">
            <div className="text-4xl font-bold text-gray-200 mr-6">01</div>
            <div>
                <h3 className="font-bold text-gray-900 text-lg">The Probable Word Method</h3>
                <p className="text-gray-600 mt-2">Can you solve for $K$ given a pair $(M, E)$? A strong cipher must make this computationally infeasible, even if $M$ is known.</p>
            </div>
        </div>
        <div className="flex items-start p-6 border border-gray-200 shadow-sm bg-white">
             <div className="text-4xl font-bold text-gray-200 mr-6">02</div>
             <div>
                <h3 className="font-bold text-gray-900 text-lg">Statistical Attacks</h3>
                <p className="text-gray-600 mt-2">Exploiting redundancy. If the ciphertext preserves statistical properties of the language (frequency), it is broken.</p>
            </div>
        </div>
        <div className="flex items-start p-6 border border-gray-200 shadow-sm bg-white">
             <div className="text-4xl font-bold text-gray-200 mr-6">03</div>
             <div>
                <h3 className="font-bold text-gray-900 text-lg">End Effects</h3>
                <p className="text-gray-600 mt-2">Vulnerabilities at the boundaries of messages where diffusion might not be fully established.</p>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Conclusion: The 5 Criteria Trade-off",
    content: (
       <div className="text-center max-w-2xl mx-auto">
           <p className="mb-6 text-xl text-gray-800 font-serif italic">
               "Good cryptography is a game of trade-offs."
           </p>
           {/* Radar Chart handled in component */}
           <div className="mt-8 p-6 bg-gray-50 border border-gray-200 text-sm text-gray-600 leading-loose">
               Secrecy is a statistical battle between <br/>
               <span className="font-bold text-[#d9232e]">Redundancy</span> (via Compression) and <span className="font-bold text-[#d9232e]">Complexity</span> (via Diffusion/Confusion).
           </div>
       </div>
    )
  }
];