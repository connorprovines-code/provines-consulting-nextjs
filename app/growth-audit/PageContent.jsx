"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GrowthAuditContent() {
  return (
    <div className="bg-white">
      {/* ============================================================ */}
      {/* HERO — navy, the offer in one breath                          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
                <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <p className="text-[var(--electric-blue)] text-xs font-bold uppercase tracking-widest mb-5">
            The Owner-Operated Growth Stack
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--navy)] leading-[1.04] tracking-tighter mb-6">
            Stop renting your marketing.<br />
            Start{" "}
            <span className="relative inline-block">
              <span className="relative z-10">owning it.</span><svg aria-hidden="true" viewBox="0 0 1000 480" className="pointer-events-none absolute z-0 hidden md:block select-none" style={{left:"calc(100% - 2.3em)",top:"-2.75em",width:"12em"}}><g fill="#00D9A3"><path d="M 334.4 301.0 C 332.3 304.4, 319.9 305.9, 317.3 309.4 C 314.7 313.0, 321.1 320.1, 318.9 322.2 C 316.6 324.3, 308.3 320.4, 304.0 322.1 C 299.8 323.9, 297.4 331.9, 293.6 333.0 C 289.8 334.0, 285.0 330.0, 281.1 328.3 C 277.3 326.6, 273.6 325.1, 270.5 322.9 C 267.3 320.6, 262.5 317.9, 262.0 314.7 C 261.6 311.4, 267.9 307.0, 268.0 303.3 C 268.1 299.6, 260.5 294.3, 262.8 292.3 C 265.1 290.3, 278.5 294.7, 281.5 291.3 C 284.6 288.0, 278.5 276.6, 281.0 272.3 C 283.4 268.1, 292.6 263.6, 296.4 265.9 C 300.2 268.1, 301.1 282.1, 303.7 285.8 C 306.3 289.4, 307.7 287.3, 312.1 287.9 C 316.5 288.5, 326.5 287.0, 330.2 289.2 C 333.9 291.3, 336.6 297.6, 334.4 301.0 Z"/><path d="M 393.4 268.5 C 394.1 271.4, 402.5 275.1, 402.3 277.9 C 402.1 280.7, 395.9 283.7, 392.1 285.2 C 388.3 286.6, 383.5 285.9, 379.6 286.6 C 375.6 287.2, 370.8 290.0, 368.3 288.8 C 365.9 287.6, 369.0 280.3, 365.0 279.2 C 361.0 278.0, 345.4 283.4, 344.5 281.9 C 343.6 280.4, 357.2 273.1, 359.9 270.3 C 362.5 267.4, 360.8 267.6, 360.5 264.7 C 360.3 261.9, 356.5 255.3, 358.2 253.1 C 360.0 250.8, 366.8 252.3, 371.1 251.2 C 375.4 250.1, 378.9 247.5, 383.9 246.6 C 388.9 245.7, 398.5 243.5, 400.9 245.8 C 403.3 248.1, 399.5 256.5, 398.2 260.3 C 396.9 264.1, 392.7 265.6, 393.4 268.5 Z"/><path d="M 351.7 313.3 C 351.0 314.7, 346.6 313.8, 346.9 316.8 C 347.2 319.7, 354.7 329.0, 353.6 330.8 C 352.5 332.6, 344.0 328.1, 340.5 327.4 C 336.9 326.7, 333.9 328.0, 332.3 326.8 C 330.7 325.5, 331.5 321.4, 330.9 319.7 C 330.3 317.9, 329.4 317.6, 328.5 316.3 C 327.6 315.0, 325.3 313.1, 325.7 311.8 C 326.1 310.4, 329.3 309.5, 330.9 308.2 C 332.4 306.9, 333.2 304.4, 334.9 304.0 C 336.5 303.6, 338.9 305.6, 340.8 305.8 C 342.7 306.1, 344.6 305.3, 346.4 305.7 C 348.2 306.1, 350.6 307.0, 351.5 308.3 C 352.4 309.5, 352.5 311.9, 351.7 313.3 Z"/><path d="M 394.8 298.2 C 392.8 300.2, 389.0 299.1, 389.5 302.1 C 390.0 305.1, 399.2 315.4, 397.8 316.1 C 396.4 316.9, 384.8 308.0, 381.1 306.6 C 377.5 305.2, 378.3 307.2, 376.0 307.7 C 373.7 308.3, 369.9 310.2, 367.3 310.0 C 364.7 309.7, 365.3 307.9, 360.7 306.4 C 356.0 305.0, 338.6 303.3, 339.3 301.3 C 339.9 299.3, 358.7 295.8, 364.4 294.5 C 370.1 293.2, 371.2 294.1, 373.4 293.5 C 375.5 292.9, 375.6 292.2, 377.4 291.0 C 379.2 289.7, 382.0 286.4, 384.3 286.0 C 386.6 285.6, 388.2 287.7, 391.0 288.4 C 393.9 289.1, 401.0 288.6, 401.6 290.2 C 402.2 291.8, 396.9 296.2, 394.8 298.2 Z"/><path d="M 397.7 294.0 C 396.6 295.0, 397.4 295.2, 397.0 295.9 C 396.7 296.5, 396.4 297.1, 395.8 297.8 C 395.2 298.5, 394.5 299.0, 393.4 299.9 C 392.2 300.8, 390.0 302.9, 388.7 302.9 C 387.4 303.0, 385.9 301.3, 385.5 300.3 C 385.1 299.2, 386.7 297.4, 386.5 296.5 C 386.3 295.6, 384.2 295.4, 384.2 294.8 C 384.3 294.1, 386.3 293.6, 386.7 292.7 C 387.1 291.8, 385.9 289.9, 386.6 289.3 C 387.3 288.7, 389.5 289.6, 390.8 289.3 C 392.2 289.0, 393.6 287.4, 394.6 287.5 C 395.6 287.6, 395.4 289.6, 396.9 289.9 C 398.4 290.3, 403.4 289.1, 403.5 289.8 C 403.7 290.4, 398.8 293.0, 397.7 294.0 Z"/><path d="M 407.4 262.2 C 409.4 264.4, 406.1 270.6, 402.5 272.1 C 398.9 273.6, 389.6 270.2, 385.7 271.2 C 381.8 272.1, 382.1 276.5, 379.0 277.9 C 375.9 279.2, 368.8 280.8, 367.0 279.3 C 365.2 277.9, 370.3 271.6, 368.2 269.2 C 366.1 266.9, 356.2 267.6, 354.4 265.2 C 352.7 262.9, 355.2 258.1, 357.7 255.4 C 360.1 252.7, 365.2 250.8, 369.1 249.2 C 373.1 247.6, 377.5 246.0, 381.5 245.9 C 385.5 245.7, 391.7 246.1, 393.1 248.3 C 394.6 250.5, 388.0 256.8, 390.3 259.1 C 392.7 261.4, 405.4 260.0, 407.4 262.2 Z"/><path d="M 360.4 291.2 C 357.7 293.3, 351.0 293.5, 349.1 294.9 C 347.1 296.3, 349.6 298.5, 348.6 299.4 C 347.5 300.2, 344.6 299.9, 342.9 300.1 C 341.2 300.2, 339.9 300.2, 338.3 300.2 C 336.7 300.3, 334.8 300.8, 333.3 300.5 C 331.9 300.1, 330.0 299.3, 329.6 298.2 C 329.3 297.1, 332.5 295.4, 331.2 294.1 C 330.0 292.8, 323.1 291.9, 322.2 290.4 C 321.3 288.9, 325.3 288.1, 325.8 285.1 C 326.3 282.0, 322.9 273.0, 325.1 271.9 C 327.3 270.9, 335.6 277.3, 339.0 278.9 C 342.4 280.4, 343.4 280.5, 345.5 281.0 C 347.6 281.6, 348.4 282.2, 351.8 282.4 C 355.1 282.7, 364.2 281.1, 365.7 282.6 C 367.1 284.1, 363.2 289.2, 360.4 291.2 Z"/><path d="M 406.4 290.0 C 406.4 291.9, 405.2 294.5, 403.6 296.0 C 402.0 297.5, 399.0 298.3, 396.8 299.2 C 394.5 300.0, 394.4 298.2, 390.2 300.9 C 386.0 303.6, 373.5 316.2, 371.8 315.4 C 370.0 314.6, 380.1 300.0, 379.8 296.0 C 379.5 292.0, 371.6 293.9, 369.9 291.6 C 368.3 289.2, 368.2 284.5, 369.9 281.9 C 371.7 279.3, 376.8 277.6, 380.5 275.9 C 384.1 274.3, 386.6 274.2, 391.9 272.1 C 397.1 269.9, 410.1 261.0, 411.9 263.1 C 413.8 265.3, 404.0 280.2, 403.1 284.7 C 402.2 289.2, 406.3 288.1, 406.4 290.0 Z"/><path d="M 328.7 301.7 C 334.0 302.9, 349.8 307.2, 360.3 308.7 C 370.7 310.2, 381.0 310.9, 391.3 310.8 C 401.6 310.6, 411.7 308.3, 421.9 307.7 C 432.1 307.2, 442.6 309.5, 452.7 307.4 C 462.8 305.3, 472.5 299.2, 482.4 295.2 C 492.4 291.3, 502.1 285.8, 512.2 283.5 C 522.3 281.3, 537.8 282.1, 542.9 281.8 C 548.0 281.5, 548.0 281.5, 542.9 281.8 C 537.8 282.1, 522.4 282.9, 512.2 283.5 C 502.0 284.2, 491.8 285.8, 481.5 285.5 C 471.2 285.3, 460.7 282.4, 450.3 281.9 C 440.0 281.3, 429.8 282.6, 419.5 282.1 C 409.1 281.7, 398.5 277.8, 388.3 279.1 C 378.2 280.4, 368.4 286.2, 358.5 290.0 C 348.6 293.7, 333.7 299.8, 328.7 301.7 C 323.8 303.7, 323.5 300.5, 328.7 301.7 Z"/><path d="M 380.9 289.9 C 386.3 290.3, 402.5 291.7, 413.3 292.3 C 424.0 292.8, 434.8 293.3, 445.4 293.3 C 456.0 293.2, 466.8 293.9, 477.1 291.8 C 487.5 289.7, 497.3 284.5, 507.3 280.6 C 517.3 276.7, 527.0 271.1, 537.2 268.1 C 547.4 265.2, 558.0 264.9, 568.3 262.8 C 578.6 260.7, 594.0 256.8, 599.1 255.6 C 604.2 254.4, 604.2 254.4, 599.1 255.6 C 594.0 256.8, 578.9 262.3, 568.3 262.8 C 557.7 263.3, 546.2 258.2, 535.7 258.7 C 525.1 259.3, 515.4 265.1, 504.9 266.3 C 494.4 267.4, 483.4 264.8, 472.8 265.5 C 462.3 266.2, 451.9 267.8, 441.6 270.3 C 431.4 272.9, 421.5 277.6, 411.4 280.9 C 401.3 284.1, 386.0 288.4, 380.9 289.9 C 375.8 291.4, 375.5 289.5, 380.9 289.9 Z"/><path d="M 397.1 272.6 Q 599.7 195.4, 807.9 135.4 Q 598.9 193.0, 395.3 267.3 Z"/><circle cx="869.7" cy="115.1" r="2.5"/><circle cx="941.1" cy="91.8" r="3.3"/><circle cx="986.5" cy="77.0" r="3.2"/><path d="M 409.5 320.5 Q 478.6 327.9, 548.2 328.5 Q 478.8 325.4, 409.9 315.0 Z"/><circle cx="548.2" cy="328.5" r="6.1"/><circle cx="570.1" cy="330.2" r="2.8"/><circle cx="582.5" cy="331.2" r="2.2"/><circle cx="593.7" cy="332.0" r="1.9"/><path d="M 418.5 312.6 Q 464.0 313.3, 509.6 311.2 Q 464.1 310.8, 418.6 307.0 Z"/><path d="M 326.5 292.0 Q 389.2 261.4, 454.5 237.4 Q 388.3 259.3, 324.5 287.2 Z"/><circle cx="454.5" cy="237.4" r="3.7"/><circle cx="473.8" cy="229.6" r="1.8"/><path d="M 447.5 300.2 Q 515.6 292.8, 583.9 289.1 Q 515.4 290.3, 447.2 294.8 Z"/><circle cx="583.9" cy="289.1" r="5.7"/><path d="M 385.5 314.4 Q 462.5 320.5, 539.8 318.7 Q 462.6 318.5, 385.7 309.9 Z"/><path d="M 344.5 281.9 Q 459.2 233.9, 571.8 181.4 Q 458.5 232.5, 343.1 278.7 Z"/><circle cx="571.8" cy="181.4" r="2.9"/><path d="M 446.7 253.7 Q 539.8 216.5, 635.3 186.7 Q 539.0 214.4, 445.1 249.0 Z"/><path d="M 372.2 274.2 Q 527.2 206.7, 685.5 148.0 Q 526.4 204.7, 370.5 269.7 Z"/><circle cx="685.5" cy="148.0" r="2.8"/><path d="M 316.1 313.6 Q 410.4 324.9, 505.5 326.5 Q 410.6 322.3, 316.6 307.8 Z"/><circle cx="505.5" cy="326.5" r="6.1"/><circle cx="526.7" cy="328.3" r="2.0"/><path d="M 411.1 309.0 Q 464.5 308.3, 517.9 304.8 Q 464.5 305.7, 411.1 303.2 Z"/><circle cx="517.9" cy="304.8" r="3.5"/><path d="M 321.6 314.0 Q 406.5 320.0, 491.3 325.7 Q 406.7 317.5, 322.1 308.5 Z"/><path d="M 483.8 324.3 Q 595.6 328.6, 707.1 337.9 Q 595.8 326.6, 484.2 319.9 Z"/><circle cx="707.1" cy="337.9" r="5.1"/><circle cx="728.2" cy="339.4" r="2.9"/><circle cx="761.4" cy="341.8" r="2.8"/><path d="M 348.0 298.6 Q 490.1 270.3, 633.6 249.6 Q 489.8 268.5, 347.3 294.7 Z"/><circle cx="633.6" cy="249.6" r="2.7"/><path d="M 382.8 287.5 Q 464.2 267.8, 546.3 252.0 Q 463.9 266.7, 382.3 285.2 Z"/><circle cx="566.3" cy="247.8" r="1.5"/><circle cx="594.0" cy="242.0" r="0.7"/><circle cx="626.0" cy="235.3" r="1.4"/><path d="M 390.5 259.4 Q 512.5 201.8, 635.7 146.7 Q 512.0 200.6, 389.3 256.9 Z"/><circle cx="635.7" cy="146.7" r="2.6"/><path d="M 383.1 324.9 Q 494.2 338.8, 605.2 352.9 Q 494.5 336.1, 383.9 319.1 Z"/><circle cx="639.0" cy="357.6" r="3.8"/><circle cx="672.4" cy="362.2" r="1.5"/><circle cx="711.2" cy="367.6" r="2.7"/><path d="M 311.9 312.9 Q 390.3 315.1, 468.2 323.9 Q 390.5 312.9, 312.3 308.0 Z"/><path d="M 451.1 320.8 Q 527.8 329.2, 604.9 330.1 Q 527.8 328.1, 451.3 318.3 Z"/><circle cx="604.9" cy="330.1" r="1.4"/><path d="M 376.1 268.7 Q 558.4 199.1, 733.1 112.0 Q 557.6 197.4, 374.4 264.9 Z"/><circle cx="733.1" cy="112.0" r="3.6"/><circle cx="790.3" cy="87.2" r="1.9"/><path d="M 353.4 280.9 Q 496.3 211.9, 646.3 160.6 Q 495.5 210.0, 351.7 276.6 Z"/><circle cx="693.2" cy="141.8" r="2.1"/><circle cx="747.1" cy="120.1" r="2.4"/><circle cx="788.0" cy="103.6" r="2.1"/><path d="M 471.2 337.2 Q 533.9 344.7, 596.7 352.5 Q 534.3 342.5, 471.9 332.2 Z"/><path d="M 362.0 292.7 Q 451.1 271.6, 540.7 252.7 Q 450.7 269.7, 361.1 288.5 Z"/><circle cx="540.7" cy="252.7" r="4.2"/><path d="M 386.4 257.9 Q 427.3 238.3, 466.9 216.3 Q 426.5 236.8, 384.7 254.5 Z"/><path d="M 331.5 292.3 Q 384.8 274.4, 437.9 256.1 Q 384.4 273.4, 330.8 290.0 Z"/><circle cx="437.9" cy="256.1" r="2.7"/><path d="M 274.4 314.2 Q 250.2 314.7, 226.0 314.8 Q 250.2 315.8, 274.4 316.7 Z"/><circle cx="226.0" cy="314.8" r="1.5"/><circle cx="850.0" cy="12.4" r="0.7"/><circle cx="769.1" cy="21.1" r="1.4"/><circle cx="882.1" cy="409.2" r="1.1"/><circle cx="763.6" cy="6.2" r="0.7"/><circle cx="487.0" cy="332.6" r="3.1"/><circle cx="756.8" cy="281.4" r="2.3"/><circle cx="572.3" cy="166.5" r="0.7"/><circle cx="556.4" cy="284.9" r="1.7"/><circle cx="603.0" cy="257.7" r="3.0"/><circle cx="756.7" cy="349.0" r="1.0"/><circle cx="765.1" cy="-0.4" r="1.3"/><circle cx="699.1" cy="378.6" r="2.8"/><circle cx="442.7" cy="278.9" r="2.3"/><circle cx="800.1" cy="264.5" r="0.7"/><circle cx="840.0" cy="326.3" r="1.1"/><circle cx="706.5" cy="363.8" r="1.9"/><circle cx="904.8" cy="155.0" r="0.7"/><circle cx="746.7" cy="312.5" r="2.3"/><circle cx="853.4" cy="-11.3" r="0.7"/><circle cx="715.0" cy="91.3" r="2.2"/><circle cx="827.7" cy="410.6" r="1.5"/><circle cx="607.2" cy="93.5" r="2.8"/><circle cx="601.0" cy="281.8" r="0.7"/><circle cx="459.7" cy="265.0" r="3.3"/><circle cx="750.4" cy="20.2" r="0.7"/><circle cx="676.2" cy="242.0" r="1.8"/><circle cx="555.0" cy="297.1" r="0.9"/><circle cx="878.5" cy="92.5" r="0.8"/><circle cx="471.1" cy="294.9" r="1.1"/><circle cx="595.1" cy="180.3" r="3.4"/><circle cx="450.6" cy="304.1" r="4.7"/><circle cx="626.1" cy="303.6" r="1.1"/><circle cx="494.3" cy="244.0" r="2.6"/><circle cx="721.5" cy="99.5" r="1.6"/><circle cx="772.8" cy="340.0" r="0.7"/><circle cx="496.1" cy="205.4" r="3.8"/><circle cx="650.9" cy="337.4" r="1.9"/><circle cx="446.0" cy="214.1" r="2.6"/><circle cx="729.2" cy="116.6" r="1.4"/><circle cx="662.1" cy="182.3" r="3.0"/><circle cx="476.6" cy="247.8" r="2.0"/><circle cx="629.2" cy="180.9" r="3.0"/><circle cx="765.9" cy="139.8" r="0.8"/><circle cx="774.7" cy="128.0" r="0.7"/><circle cx="657.6" cy="379.3" r="2.0"/><circle cx="448.6" cy="284.1" r="4.6"/><path d="M 448.6 281.4 Q 421.4 287.9, 448.6 286.9 Z"/><circle cx="519.7" cy="336.0" r="1.1"/><circle cx="664.0" cy="277.1" r="2.3"/><circle cx="436.9" cy="227.5" r="1.3"/><circle cx="886.5" cy="211.4" r="1.2"/><circle cx="387.6" cy="313.6" r="1.3"/><circle cx="643.8" cy="285.3" r="2.1"/><circle cx="764.3" cy="300.4" r="2.2"/><circle cx="820.5" cy="141.5" r="0.7"/><circle cx="601.7" cy="304.7" r="3.1"/><circle cx="738.1" cy="228.6" r="0.7"/><circle cx="506.9" cy="218.7" r="2.6"/><circle cx="515.0" cy="164.6" r="3.8"/><circle cx="380.2" cy="267.9" r="4.3"/><circle cx="432.9" cy="275.6" r="1.9"/><circle cx="714.1" cy="267.5" r="2.1"/><circle cx="488.0" cy="237.0" r="1.0"/><circle cx="748.9" cy="44.2" r="1.2"/><circle cx="433.7" cy="294.2" r="1.0"/><circle cx="529.6" cy="324.8" r="2.5"/><circle cx="484.3" cy="293.1" r="2.3"/><circle cx="825.0" cy="166.1" r="0.7"/><circle cx="781.4" cy="222.8" r="2.0"/><circle cx="579.9" cy="305.1" r="1.3"/><circle cx="504.6" cy="264.3" r="3.7"/><circle cx="670.2" cy="360.4" r="2.0"/><path d="M 670.2 359.2 Q 658.0 358.7, 670.2 361.6 Z"/><circle cx="691.8" cy="367.4" r="2.6"/><path d="M 691.8 365.9 Q 676.4 365.2, 691.8 369.0 Z"/><circle cx="466.3" cy="326.1" r="2.4"/><circle cx="670.6" cy="268.8" r="2.0"/><circle cx="838.8" cy="366.3" r="0.8"/><circle cx="723.2" cy="217.7" r="0.7"/><circle cx="792.0" cy="403.0" r="2.0"/><circle cx="527.3" cy="225.9" r="1.5"/><circle cx="729.8" cy="312.6" r="2.1"/><path d="M 729.8 311.4 Q 717.1 312.5, 729.8 313.9 Z"/><circle cx="370.9" cy="301.9" r="5.2"/><circle cx="414.1" cy="311.5" r="1.9"/><circle cx="753.5" cy="266.2" r="2.1"/><path d="M 753.5 264.9 Q 740.9 267.3, 753.5 267.4 Z"/><circle cx="655.7" cy="93.9" r="2.0"/><circle cx="600.7" cy="146.3" r="1.0"/><circle cx="808.6" cy="265.6" r="1.3"/><circle cx="417.4" cy="261.0" r="4.4"/><circle cx="583.7" cy="243.5" r="2.5"/><circle cx="759.0" cy="65.6" r="1.7"/><circle cx="593.3" cy="274.7" r="2.5"/><circle cx="765.0" cy="198.8" r="1.5"/><circle cx="805.4" cy="186.6" r="1.2"/><circle cx="701.4" cy="177.6" r="1.5"/><circle cx="540.9" cy="348.1" r="2.8"/><circle cx="711.4" cy="343.2" r="2.7"/><circle cx="534.8" cy="155.7" r="2.2"/><path d="M 534.8 154.4 Q 523.6 162.4, 534.8 157.0 Z"/><circle cx="857.1" cy="287.0" r="0.9"/><circle cx="527.5" cy="199.7" r="3.5"/><circle cx="745.2" cy="14.6" r="1.1"/><circle cx="721.6" cy="21.7" r="1.3"/><circle cx="867.7" cy="67.5" r="0.7"/><circle cx="696.2" cy="192.6" r="0.9"/><circle cx="575.0" cy="183.6" r="2.0"/><path d="M 575.0 182.4 Q 563.9 188.3, 575.0 184.8 Z"/><circle cx="463.2" cy="269.1" r="4.4"/><circle cx="609.7" cy="292.2" r="2.9"/><circle cx="804.2" cy="87.1" r="1.3"/><circle cx="873.1" cy="229.1" r="1.1"/><circle cx="438.1" cy="299.2" r="4.3"/><circle cx="470.0" cy="310.7" r="2.1"/><circle cx="490.2" cy="209.9" r="4.0"/><path d="M 490.2 207.5 Q 468.2 220.1, 490.2 212.3 Z"/><circle cx="724.2" cy="204.3" r="2.3"/><circle cx="873.5" cy="352.0" r="0.9"/><circle cx="666.5" cy="295.6" r="1.1"/><circle cx="597.0" cy="211.4" r="2.9"/><circle cx="875.3" cy="65.6" r="0.7"/><circle cx="506.7" cy="274.9" r="3.2"/><circle cx="571.3" cy="273.5" r="2.1"/><circle cx="838.2" cy="64.8" r="0.7"/><circle cx="719.8" cy="203.6" r="2.6"/><path d="M 719.8 202.0 Q 704.5 207.2, 719.8 205.2 Z"/><circle cx="396.8" cy="237.3" r="4.5"/><circle cx="622.9" cy="358.2" r="1.1"/><circle cx="738.1" cy="24.9" r="1.2"/><circle cx="540.7" cy="294.1" r="3.4"/><circle cx="578.6" cy="146.0" r="1.2"/><circle cx="854.2" cy="279.6" r="0.7"/><circle cx="795.7" cy="380.5" r="1.4"/><circle cx="512.9" cy="215.8" r="3.5"/><circle cx="658.6" cy="106.1" r="1.3"/><circle cx="661.3" cy="196.8" r="1.4"/><circle cx="803.0" cy="389.5" r="1.4"/><circle cx="624.0" cy="305.2" r="1.5"/><circle cx="846.0" cy="416.7" r="1.0"/><circle cx="876.2" cy="409.3" r="0.7"/><circle cx="715.8" cy="367.4" r="2.4"/><circle cx="683.4" cy="390.2" r="2.3"/><circle cx="601.1" cy="273.6" r="3.6"/><circle cx="491.2" cy="286.4" r="2.2"/><circle cx="750.7" cy="78.8" r="0.8"/><circle cx="881.0" cy="425.8" r="0.9"/><circle cx="726.2" cy="99.3" r="0.8"/><circle cx="530.1" cy="166.4" r="1.7"/><circle cx="539.5" cy="309.9" r="3.4"/><circle cx="863.1" cy="177.6" r="0.9"/><circle cx="397.9" cy="291.4" r="2.8"/><circle cx="847.3" cy="252.1" r="1.5"/><circle cx="919.3" cy="330.9" r="0.7"/><circle cx="918.5" cy="352.6" r="0.9"/><circle cx="842.1" cy="81.4" r="1.3"/><circle cx="843.6" cy="281.8" r="0.7"/><circle cx="846.2" cy="13.7" r="0.7"/><circle cx="581.2" cy="133.5" r="3.2"/><circle cx="570.0" cy="232.3" r="3.6"/><circle cx="608.1" cy="250.4" r="3.2"/><circle cx="692.8" cy="206.4" r="2.1"/><path d="M 286.5 333.0 Q 290.6 373.4, 290.6 373.4 Q 290.6 373.4, 294.6 333.0 Z"/><circle cx="290.6" cy="373.4" r="4.5"/></g></svg>
            </span>
          </h1>
          <p className="relative z-10 text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            A marketing department you own: website, CRM, and ads wired together in your
            name, run day to day by an AI operator you direct in plain English.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--navy)] text-white font-semibold text-lg hover:bg-[var(--electric-blue)] transition-colors"
          >
            Book a growth audit
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 01 — A QUICK TEST                                             */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">A quick test</p>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            <p>
              When was the last time you changed something about your own marketing?
              Not requested a change. Made one.
            </p>
            <p>
              Say the idea hits you on a Tuesday morning: a campaign for the service you want
              more of, in a market you want to break into. Nothing exotic. It needs a landing
              page, ad copy, a campaign pointed at the right searches, and the leads wired into
              follow-up. Be honest: how long would that take you today? Could you build the page
              yourself? Set up the tracking? Who would you have to call first, and how many
              weeks before it&apos;s live?
            </p>
            <p>
              If the answer is a list of people you&apos;d have to wait on, then you don&apos;t own your marketing. You&apos;re renting it, no matter whose name is on the invoices.
            </p>
            <p>
              That&apos;s the deal most owner-operated businesses have with their agency: a rental agreement. You pay a few grand a month. The agency owns the accounts, the data, and everything they&apos;ve learned about your customers on your dime. The reports say things are going well. You can&apos;t check. Leave, and all of it stays with them. You start over from nothing, because none of it was ever yours.
            </p>
          </div>

          <div className="my-10 border-l-4 border-[var(--electric-blue)] bg-slate-50 px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--electric-blue)] mb-2">Ownership, defined</p>
            <p className="text-[var(--navy)] text-lg leading-relaxed font-medium">
              Ownership isn&apos;t having the passwords. It&apos;s being able to understand your
              own tools, change them, and act on your own vision without a third party standing
              between you and your business. Anything less is rent.
            </p>
          </div>

          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            
            <p>
              And the rent is worse than the money. Every idea you have gets translated through someone else&apos;s ticket queue. You see the ad copy after it&apos;s live. Your vision for your own company arrives watered down and three weeks late, if it arrives at all.
            </p>
            <p>
              Here&apos;s what I&apos;ve learned opening these businesses up: the owner is never
              the problem. You know what you want. You know your market better than any agency
              ever will, and you can say exactly what should happen next. What you don&apos;t
              have is the technical ability to execute it, or the time to learn five tools deep
              enough to try. That gap, between your vision and your hands on the controls, is
              what you&apos;ve been renting people to fill.
            </p>
            <p>
              AI is what closes that gap now. Not a chatbot bolted onto your website. AI
              integrated into your actual systems, where it can see where your leads come from,
              what your ads return, what your competitors are doing, and then act on it the
              moment you say so. Integration is the whole game, and it&apos;s the part nobody
              selling AI wants to do.
            </p>
            <p>
              Once it&apos;s done, that Tuesday-morning idea is a same-day launch. The page, the
              copy, the campaign, the tracking, live before dinner, without calling anyone.
              When you have the thought, you can actually execute it.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 — WHAT CHANGED — navy band with comparison table           */}
      {/* ============================================================ */}
      <section className="bg-[var(--off-white)] border-y border-[var(--line)] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-6">
            AI rewrote the economics of marketing labor. It didn&apos;t change who keeps the keys.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed mb-12">
            <p>
              The labor an agency actually does for you, meaning the follow-up, the campaign
              adjustments, the reporting, the CRM upkeep: AI can now do most of that work, all
              day, on your numbers. The agencies know it. Plenty are already using AI to do your
              work and billing you the same retainer.
            </p>
            <p>
              So a wave of new companies will now sell you an &quot;AI marketing team&quot; instead.
              Here&apos;s the part nobody says out loud: they kept the keys too. The bots run on
              their platform. Your data lives inside their subscription. The moment you stop paying,
              your so-called marketing employee vanishes with everything it learned. Same rental
              agreement, new landlord.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-slate-500 uppercase text-xs tracking-wider border-b border-slate-300">
                  <th className="py-3 pr-4 font-semibold"></th>
                  <th className="py-3 pr-4 font-semibold">Agency</th>
                  <th className="py-3 pr-4 font-semibold">AI platforms</th>
                  <th className="py-3 font-semibold text-[var(--electric-blue)]">The Growth Stack</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-[var(--line)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--navy)]">Who owns the accounts</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 text-[var(--navy)] font-medium">You do</td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--navy)]">Who does the daily labor</td>
                  <td className="py-4 pr-4">Their juniors, increasingly their AI</td>
                  <td className="py-4 pr-4">Their bots, on their servers</td>
                  <td className="py-4 text-[var(--navy)] font-medium">Your operator, on your machine</td>
                </tr>
                <tr className="border-b border-[var(--line)]">
                  <td className="py-4 pr-4 font-semibold text-[var(--navy)]">Who understands the system</td>
                  <td className="py-4 pr-4">They do</td>
                  <td className="py-4 pr-4">Nobody, really</td>
                  <td className="py-4 text-[var(--navy)] font-medium">You do. I train you.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold text-[var(--navy)]">What&apos;s left when you leave</td>
                  <td className="py-4 pr-4">Nothing</td>
                  <td className="py-4 pr-4">Nothing</td>
                  <td className="py-4 text-[var(--navy)] font-medium">Everything. Leaving isn&apos;t a concept that applies.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[var(--navy)] text-lg leading-relaxed mt-12 max-w-2xl font-medium">
            I do the one thing neither of them will, because it would kill their retainer.
            I build the machine in your name, and I teach you to run it.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 — THE BUILD                                                */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">The build</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-6">
            About five weeks, fixed scope. Every piece exists so you can act on your own
            vision without asking permission.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mb-10">
            None of it works as a bolt-on. A bot that isn&apos;t inside your systems can write
            you a paragraph. An operator that&apos;s wired into your site, your CRM, and your
            ad accounts can see your numbers and execute your decisions. The five weeks exist to do that wiring. By the end, one operator can see the whole board at once: the site, the CRM, the campaigns, the search data, with every path between them mapped. That&apos;s what makes the same-day launch real.
          </p>

          <p className="flex items-baseline gap-3 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.07em] text-slate-500 mb-6">FIG. 1 — THE BUILD<span className="flex-1 border-b border-dotted border-slate-400/60"></span></p>
          <div className="space-y-4 mb-12">
            {[
              {
                build: "Your website, migrated to a modern stack you own",
                get: "Same URLs, same rankings, none of the platform lock-in. Change your own headline the moment you think of it. No editor to fight, no ticket to file.",
              },
              {
                build: "Your CRM, right-sized to how your team actually sells",
                get: "See every lead and exactly what's happening to it, in one place, with follow-up that fires in minutes instead of days.",
              },
              {
                build: "Your ad campaigns, wired to closed-loop tracking",
                get: "Trace every dollar to booked revenue. You'll never wonder what's working again.",
              },
              {
                build: "An AI orchestrator on a machine you own, wired into all of it",
                get: "Direct the ops in plain English: lead follow-up, campaign adjustments, CRM upkeep, new pages when you need them, SEO and competitor research on tap. It executes; you stay the decision-maker.",
              },
            ].map((row) => (
              <div key={row.build} className="grid md:grid-cols-[1fr_1.3fr] gap-2 md:gap-8 border border-slate-200 p-6">
                <p className="font-semibold text-[var(--navy)]">{row.build}</p>
                <p className="text-slate-600">{row.get}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-slate-600 leading-relaxed text-lg max-w-2xl">
            <p>
              While I&apos;m in there, I do the job I spent twelve years doing inside B2B software
              companies: I fix how your marketing hands off to your sales. Most businesses I open
              up are leaking leads in the gap between the two. Shaking those cobwebs out is part
              of the build, not an upsell.
            </p>
            <p>
              When we&apos;re done, I train you until you don&apos;t need me. Not a Loom library
              and a goodbye. We run it together until directing the operator feels like directing
              an employee, and the distance between your idea and your website is an afternoon,
              not a meeting cycle.
            </p>
            <p>
              Then you have a choice: run it yourself, or keep me on month to month. Either way
              nothing is locked in, and everything is yours. The code, the data, the accounts,
              the machine.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 — PROOF                                                    */}
      {/* ============================================================ */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">Proof</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-10">
            Two recent builds.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-slate-200 p-7">
              <h3 className="font-bold text-[var(--navy)] text-lg mb-3">9-person custom home builder, Oklahoma City</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Paying over 90% more than they needed to in software, with a website trapped in a
                CMS nobody on staff could edit. Four weeks later the site was migrated to a stack
                they own, the CRM was right-sized, and an AI operator was on the day-to-day. Their
                team changes their own website now.
              </p>
              <Link href="/work/custom-home-builder" className="inline-flex items-center text-[var(--electric-blue)] font-medium text-sm hover:underline">
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white border border-slate-200 p-7">
              <h3 className="font-bold text-[var(--navy)] text-lg mb-3">5-person owner-operated company, Oregon</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The owner had the marketing instincts and none of the tools: a site he
                couldn&apos;t meaningfully edit and a CRM full of automations an agency built and
                never turned on. We migrated the platform and wired ads, landing pages, and the
                CRM into one connected system. Today he runs the whole thing himself. Not
                &quot;his agency runs it.&quot; He runs it.
              </p>
              <Link href="/work/residential-construction" className="inline-flex items-center text-[var(--electric-blue)] font-medium text-sm hover:underline">
                Read the case study
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 — THE FIRST STEP + CTA                                     */}
      {/* ============================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-sm font-semibold text-[var(--electric-blue)] uppercase tracking-wide mb-3">The first step</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[var(--navy)] leading-tight mb-8">
            You don&apos;t decide about the build today. You decide whether it&apos;s worth
            finding out what you&apos;re leaking.
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed text-lg mb-10 max-w-2xl">
            <p>
              The first real step is a growth audit. I go through your site, your CRM, and your
              ad accounts, and I put dollar figures on where leads are leaking. You get the
              findings in writing, in plain English, whether or not we go further. If we do
              build, the audit fee comes off the build. It ends with a plan either way. Worst
              case, you finally know what&apos;s working.
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 px-6 py-5 mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--navy)] mb-3">Where the risk sits</p>
            <ul className="space-y-2 text-slate-700">
              <li>If every account isn&apos;t in your name when we&apos;re done, you don&apos;t pay the final invoice.</li>
              <li>If the stack isn&apos;t live and generating tracked leads within 90 days, I work free until it is.</li>
              <li className="text-[var(--navy)] font-medium">I can offer both because I&apos;m not betting on your dependency. I&apos;m betting you&apos;ll own it.</li>
            </ul>
          </div>

          <p className="text-slate-500 leading-relaxed mb-12 max-w-2xl">
            One honest note on fit: this is for owner-operated businesses doing roughly $500K to
            $10M a year that want control of their own growth. If you&apos;d rather never look at
            a dashboard and pay someone to handle everything forever, an agency is genuinely a
            better fit, and I&apos;ll tell you that on the call.
          </p>

          <div className="text-center border-t border-slate-200 pt-12">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center px-10 py-5 bg-[var(--navy)] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Book a growth audit
            </Link>
            <p className="text-sm text-slate-400 mt-4">
              30 minutes to kick it off. We walk through your site, your CRM, and your ad accounts.
            </p>
          </div>

          <p className="text-sm text-slate-500 italic leading-relaxed mt-14 border-t border-slate-100 pt-8 max-w-2xl">
            P.S. To be clear about what the AI is here, because the market is noisy: it&apos;s
            not a chatbot and it&apos;s not a copywriter. Anyone can get AI to write a paragraph.
            This is an orchestrator that sits inside your site, your CRM, and your ad accounts,
            watches the numbers, and executes the ops work you&apos;d otherwise hire out. The
            system that lets AI actually run things is the hard part. That system is what you
            own when we&apos;re done.
          </p>
        </div>
      </section>
    </div>
  );
}
