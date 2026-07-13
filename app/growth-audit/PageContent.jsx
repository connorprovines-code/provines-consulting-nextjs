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
            <span className="relative z-10">Stop renting your </span><span className="relative inline-block"><span className="relative z-10">marketing.</span><svg aria-hidden="true" viewBox="0 0 1000 480" className="pointer-events-none absolute z-0 hidden md:block select-none" style={{left:"calc(100% - 5.0em)",top:"-5.05em",width:"19em"}}><g fill="#00D9A3"><path d="M 282.6 319.5 C 282.5 321.8, 280.4 325.4, 277.8 326.7 C 275.3 328.0, 269.3 324.3, 267.4 327.4 C 265.5 330.4, 268.3 343.3, 266.4 345.0 C 264.4 346.6, 257.7 340.1, 255.6 337.4 C 253.4 334.6, 255.7 329.9, 253.3 328.6 C 250.8 327.2, 241.3 330.7, 240.8 329.4 C 240.3 328.2, 249.0 323.3, 250.3 321.0 C 251.5 318.8, 248.5 318.0, 248.4 315.9 C 248.4 313.9, 248.2 309.7, 250.0 308.8 C 251.7 307.8, 255.9 311.5, 258.7 310.3 C 261.6 309.1, 265.3 301.3, 267.1 301.6 C 268.9 301.8, 267.6 309.9, 269.4 311.8 C 271.3 313.7, 276.2 311.6, 278.4 312.9 C 280.6 314.2, 282.7 317.2, 282.6 319.5 Z"/><path d="M 344.5 288.3 C 344.5 290.0, 349.0 292.1, 348.7 293.3 C 348.3 294.5, 344.2 293.2, 342.6 295.7 C 340.9 298.2, 340.4 307.3, 338.5 308.0 C 336.6 308.8, 332.5 302.4, 331.1 300.0 C 329.7 297.6, 331.6 294.9, 330.2 293.6 C 328.9 292.3, 323.8 293.2, 323.1 292.1 C 322.4 291.0, 324.8 288.3, 326.1 287.0 C 327.3 285.7, 329.2 284.9, 330.6 284.3 C 332.0 283.6, 333.2 283.9, 334.5 283.0 C 335.9 282.1, 337.0 279.6, 338.9 278.8 C 340.9 277.9, 344.6 277.0, 346.3 277.7 C 348.0 278.4, 349.4 281.2, 349.1 282.9 C 348.8 284.7, 344.6 286.6, 344.5 288.3 Z"/><path d="M 389.2 343.6 C 389.1 344.3, 389.7 345.2, 389.1 345.7 C 388.6 346.1, 386.5 345.8, 385.9 346.3 C 385.2 346.8, 385.8 347.9, 385.3 348.7 C 384.8 349.4, 383.6 350.9, 382.9 350.8 C 382.1 350.7, 381.5 348.6, 380.8 348.1 C 380.2 347.6, 379.4 348.1, 378.9 347.8 C 378.4 347.6, 378.1 347.0, 377.8 346.6 C 377.5 346.1, 377.6 345.7, 377.2 345.2 C 376.8 344.6, 375.1 343.9, 375.3 343.5 C 375.6 343.0, 378.4 343.1, 378.8 342.4 C 379.3 341.7, 377.6 339.6, 378.0 339.2 C 378.5 338.9, 380.6 340.2, 381.5 340.3 C 382.4 340.3, 382.7 339.6, 383.5 339.3 C 384.3 339.0, 385.4 338.6, 386.4 338.6 C 387.3 338.6, 388.7 338.7, 389.2 339.2 C 389.7 339.7, 389.3 340.9, 389.3 341.7 C 389.3 342.4, 389.2 343.0, 389.2 343.6 Z"/><path d="M 320.3 329.0 C 319.6 330.3, 321.0 331.5, 320.1 332.3 C 319.2 333.0, 316.2 332.8, 314.9 333.4 C 313.5 334.1, 313.2 336.1, 312.2 336.2 C 311.1 336.4, 310.2 334.6, 308.8 334.5 C 307.4 334.5, 305.6 335.9, 303.8 335.9 C 302.1 336.0, 299.1 335.8, 298.2 334.9 C 297.3 334.1, 298.5 332.2, 298.6 330.8 C 298.7 329.4, 297.9 327.7, 298.9 326.6 C 299.9 325.5, 303.3 326.3, 304.7 324.3 C 306.2 322.4, 306.0 315.2, 307.6 314.7 C 309.2 314.3, 312.7 320.2, 314.2 321.8 C 315.8 323.4, 315.4 323.9, 317.0 324.4 C 318.6 324.8, 323.2 323.7, 323.8 324.5 C 324.3 325.3, 320.9 327.7, 320.3 329.0 Z"/><path d="M 476.1 293.7 C 475.2 295.2, 476.6 295.8, 476.7 297.3 C 476.9 298.8, 478.5 302.0, 477.1 302.8 C 475.7 303.6, 470.4 301.5, 468.1 302.0 C 465.9 302.6, 465.1 306.2, 463.7 306.3 C 462.2 306.5, 461.1 303.3, 459.4 302.9 C 457.7 302.5, 455.1 304.2, 453.5 303.9 C 452.0 303.7, 452.5 302.1, 450.1 301.4 C 447.8 300.8, 440.6 301.2, 439.4 300.0 C 438.2 298.7, 441.2 295.6, 442.9 293.9 C 444.6 292.2, 447.3 290.8, 449.5 289.7 C 451.7 288.7, 454.2 288.5, 456.1 287.8 C 458.0 287.2, 459.1 286.8, 460.9 285.8 C 462.7 284.8, 464.4 282.9, 466.9 281.7 C 469.5 280.5, 475.6 277.4, 476.5 278.6 C 477.4 279.8, 471.5 287.3, 472.4 289.0 C 473.3 290.6, 481.4 287.7, 482.1 288.5 C 482.7 289.3, 477.0 292.3, 476.1 293.7 Z"/><path d="M 346.7 323.1 C 347.0 325.0, 349.1 327.5, 348.2 329.1 C 347.3 330.7, 343.1 330.6, 341.1 332.7 C 339.1 334.7, 338.7 340.1, 336.2 341.4 C 333.7 342.7, 329.1 341.5, 326.4 340.6 C 323.7 339.7, 321.4 337.8, 320.0 336.0 C 318.6 334.3, 319.9 332.0, 317.9 330.2 C 315.9 328.5, 309.1 327.7, 308.1 325.6 C 307.2 323.4, 309.2 318.8, 312.2 317.5 C 315.2 316.2, 323.0 317.9, 326.1 317.7 C 329.2 317.5, 329.1 317.0, 330.8 316.3 C 332.5 315.5, 333.6 314.3, 336.4 313.2 C 339.2 312.1, 345.7 308.8, 347.4 309.6 C 349.1 310.4, 346.8 315.7, 346.6 318.0 C 346.5 320.2, 346.5 321.3, 346.7 323.1 Z"/><path d="M 477.1 271.7 C 477.4 273.1, 484.3 274.2, 484.9 275.5 C 485.4 276.8, 481.7 277.5, 480.5 279.6 C 479.2 281.8, 479.3 288.3, 477.3 288.3 C 475.3 288.3, 470.7 280.9, 468.4 279.7 C 466.0 278.4, 464.2 281.4, 463.4 280.9 C 462.6 280.4, 465.0 277.1, 463.4 276.6 C 461.9 276.1, 455.5 278.3, 454.3 277.8 C 453.0 277.4, 454.9 274.9, 455.9 273.7 C 456.9 272.5, 459.1 271.5, 460.3 270.7 C 461.6 269.8, 462.3 269.3, 463.3 268.5 C 464.2 267.7, 464.7 266.3, 465.9 265.7 C 467.1 265.0, 469.0 264.6, 470.4 264.5 C 471.9 264.4, 473.1 264.8, 474.6 265.0 C 476.0 265.2, 477.6 265.2, 479.1 265.6 C 480.5 266.0, 483.5 266.4, 483.2 267.5 C 482.9 268.5, 476.9 270.4, 477.1 271.7 Z"/><path d="M 439.9 192.5 C 438.6 193.8, 441.1 194.4, 440.6 195.1 C 440.1 195.8, 438.0 196.0, 436.9 196.7 C 435.8 197.5, 435.3 198.9, 434.0 199.6 C 432.7 200.3, 430.4 201.1, 429.1 200.9 C 427.9 200.6, 427.4 198.9, 426.8 198.1 C 426.1 197.3, 426.3 196.8, 425.2 196.1 C 424.2 195.5, 419.9 195.0, 420.3 194.3 C 420.7 193.6, 426.8 192.9, 427.9 192.0 C 429.0 191.0, 426.5 189.0, 427.2 188.4 C 427.8 187.8, 430.2 188.9, 431.7 188.4 C 433.2 187.8, 435.2 185.3, 436.3 185.2 C 437.5 185.2, 436.5 188.0, 438.5 188.3 C 440.5 188.5, 448.1 186.2, 448.4 186.9 C 448.6 187.6, 441.2 191.1, 439.9 192.5 Z"/><path d="M 460.1 295.4 C 459.4 297.0, 455.8 298.6, 454.1 300.1 C 452.5 301.6, 451.8 302.4, 450.2 304.5 C 448.6 306.5, 446.9 311.6, 444.4 312.3 C 442.0 313.1, 438.2 309.8, 435.6 308.9 C 433.1 308.1, 431.6 307.7, 429.1 307.2 C 426.6 306.6, 422.1 306.7, 420.5 305.5 C 418.8 304.2, 417.8 301.3, 419.3 299.5 C 420.8 297.7, 427.2 296.2, 429.4 294.6 C 431.6 293.1, 430.9 291.4, 432.6 290.1 C 434.2 288.8, 437.1 287.0, 439.2 287.0 C 441.3 286.9, 441.9 290.2, 445.1 289.6 C 448.4 288.9, 456.4 283.1, 458.6 283.3 C 460.9 283.4, 458.3 288.5, 458.6 290.5 C 458.8 292.5, 460.9 293.8, 460.1 295.4 Z"/><path d="M 341.8 330.7 C 342.5 331.7, 347.5 333.7, 347.0 334.4 C 346.4 335.1, 340.3 334.5, 338.3 335.0 C 336.4 335.6, 336.9 336.5, 335.3 337.7 C 333.7 338.9, 330.4 342.1, 328.8 342.2 C 327.3 342.2, 327.3 339.0, 325.8 338.1 C 324.3 337.3, 320.1 338.0, 319.9 337.0 C 319.6 336.0, 323.0 333.6, 324.2 332.4 C 325.4 331.2, 326.6 330.9, 327.2 329.9 C 327.8 328.9, 327.1 327.7, 328.0 326.4 C 328.8 325.1, 330.6 322.2, 332.1 322.1 C 333.5 322.0, 334.9 325.6, 336.6 326.0 C 338.2 326.5, 341.0 324.5, 342.1 324.8 C 343.1 325.1, 342.8 327.0, 342.8 327.9 C 342.7 328.9, 341.1 329.6, 341.8 330.7 Z"/><path d="M 386.0 306.9 C 391.5 306.5, 407.7 304.4, 418.6 304.1 C 429.6 303.9, 440.8 305.7, 451.7 305.3 C 462.6 304.9, 473.4 303.5, 484.2 301.7 C 495.0 300.0, 505.6 296.7, 516.3 294.6 C 527.0 292.4, 537.8 290.7, 548.5 288.9 C 559.3 287.1, 570.0 285.0, 580.8 283.6 C 591.6 282.2, 607.9 280.9, 613.4 280.3 C 618.8 279.8, 618.8 279.8, 613.4 280.3 C 607.9 280.9, 591.7 282.9, 580.8 283.6 C 569.9 284.3, 559.0 284.2, 548.0 284.6 C 537.1 285.0, 526.1 284.6, 515.2 285.8 C 504.4 286.9, 493.8 289.8, 483.0 291.3 C 472.2 292.7, 461.2 293.2, 450.4 294.5 C 439.6 295.7, 428.7 296.7, 418.0 298.8 C 407.3 300.9, 391.4 305.6, 386.0 306.9 C 380.7 308.3, 380.6 307.4, 386.0 306.9 Z"/><path d="M 338.6 260.2 Q 455.1 174.1, 565.0 79.6 Q 454.4 173.2, 337.0 258.3 Z"/><circle cx="565.0" cy="79.6" r="1.7"/><circle cx="588.8" cy="60.7" r="0.8"/><path d="M 328.3 303.0 Q 397.2 277.3, 468.7 260.3 Q 396.8 275.9, 327.3 299.8 Z"/><path d="M 285.9 323.4 Q 346.5 323.8, 407.1 321.3 Q 346.5 322.1, 285.9 319.6 Z"/><path d="M 323.7 334.5 Q 399.2 345.5, 474.5 357.7 Q 399.5 343.6, 324.4 330.4 Z"/><circle cx="474.5" cy="357.7" r="4.1"/><path d="M 350.0 259.5 Q 409.5 220.0, 465.7 175.7 Q 408.6 218.7, 347.9 256.6 Z"/><circle cx="465.7" cy="175.7" r="3.2"/><circle cx="475.7" cy="168.6" r="2.2"/><path d="M 349.2 307.2 Q 427.4 296.9, 504.1 277.5 Q 427.2 295.3, 348.5 303.6 Z"/><circle cx="525.1" cy="273.8" r="2.2"/><path d="M 394.6 318.8 Q 463.7 312.4, 533.0 311.5 Q 463.6 310.4, 394.4 314.3 Z"/><circle cx="554.8" cy="310.7" r="1.5"/><circle cx="576.7" cy="309.9" r="1.1"/><path d="M 414.9 205.2 Q 467.5 166.8, 517.6 125.3 Q 466.6 165.7, 413.0 202.7 Z"/><path d="M 378.2 289.8 Q 525.2 243.0, 674.3 203.3 Q 524.7 241.1, 377.1 285.7 Z"/><circle cx="715.5" cy="191.6" r="1.7"/><path d="M 387.8 232.8 Q 449.2 190.5, 508.7 145.5 Q 448.3 189.3, 385.9 230.0 Z"/><circle cx="508.7" cy="145.5" r="2.7"/><path d="M 346.7 280.3 Q 417.8 239.7, 492.5 206.3 Q 417.1 238.2, 345.1 277.0 Z"/><circle cx="512.0" cy="196.7" r="2.0"/><path d="M 409.1 279.1 Q 467.7 261.0, 526.4 243.2 Q 467.3 259.7, 408.3 276.2 Z"/><circle cx="526.4" cy="243.2" r="2.9"/><circle cx="536.1" cy="240.3" r="1.2"/><circle cx="547.2" cy="237.1" r="0.9"/><path d="M 417.3 293.3 Q 649.4 246.4, 882.1 203.1 Q 649.0 244.8, 416.6 289.8 Z"/><circle cx="910.1" cy="197.8" r="1.7"/><path d="M 379.8 310.3 Q 489.8 301.9, 599.0 285.3 Q 489.7 300.5, 379.4 307.0 Z"/><path d="M 336.7 313.8 Q 403.0 304.9, 469.0 294.3 Q 402.7 302.8, 336.1 309.1 Z"/><circle cx="489.0" cy="291.7" r="2.8"/><path d="M 403.9 221.6 Q 547.4 123.5, 687.9 21.1 Q 546.8 122.6, 402.4 219.5 Z"/><path d="M 454.9 337.7 Q 533.6 346.1, 612.8 347.1 Q 533.7 344.3, 455.2 333.7 Z"/><circle cx="633.2" cy="348.6" r="1.3"/><path d="M 307.9 287.6 Q 432.6 197.5, 552.8 101.2 Q 431.4 195.9, 305.2 284.1 Z"/><circle cx="552.8" cy="101.2" r="2.8"/><path d="M 407.0 317.0 Q 467.9 316.6, 528.6 311.0 Q 467.8 315.4, 406.9 314.5 Z"/><circle cx="541.8" cy="310.5" r="1.6"/><circle cx="556.9" cy="309.9" r="0.7"/><path d="M 324.0 322.7 Q 400.4 322.2, 476.9 322.5 Q 400.4 321.4, 324.0 320.9 Z"/><circle cx="494.9" cy="322.6" r="0.8"/><circle cx="511.6" cy="322.7" r="1.0"/><circle cx="536.2" cy="322.8" r="0.9"/><path d="M 384.6 237.1 Q 526.7 134.1, 671.7 35.3 Q 525.6 132.5, 382.1 233.5 Z"/><path d="M 320.7 327.2 Q 515.9 332.6, 710.0 352.2 Q 516.0 331.2, 320.9 324.3 Z"/><circle cx="710.0" cy="352.2" r="2.0"/><path d="M 372.9 267.0 Q 572.0 175.9, 764.8 71.9 Q 571.4 174.6, 371.5 264.3 Z"/><circle cx="764.8" cy="71.9" r="2.2"/><path d="M 357.1 300.8 Q 454.8 275.3, 553.9 255.7 Q 454.6 274.3, 356.6 298.6 Z"/><path d="M 420.2 259.8 Q 505.2 223.6, 591.6 190.8 Q 504.7 222.3, 419.1 257.0 Z"/><path d="M 279.9 315.9 Q 401.2 265.4, 526.7 226.7 Q 400.7 263.9, 278.8 312.7 Z"/><circle cx="526.7" cy="226.7" r="2.2"/><circle cx="544.4" cy="220.4" r="1.0"/><path d="M 422.2 350.7 Q 557.8 370.3, 692.7 394.0 Q 558.1 368.7, 422.9 347.1 Z"/><circle cx="692.7" cy="394.0" r="2.7"/><path d="M 289.9 321.0 Q 428.4 311.5, 566.1 294.3 Q 428.2 309.6, 289.6 316.7 Z"/><circle cx="607.0" cy="290.7" r="2.6"/><path d="M 344.3 300.3 Q 489.4 253.7, 638.4 222.1 Q 489.2 252.7, 343.7 298.2 Z"/><circle cx="638.4" cy="222.1" r="1.7"/><path d="M 388.1 222.6 Q 524.2 110.5, 665.7 5.5 Q 523.6 109.8, 386.8 220.9 Z"/><circle cx="665.7" cy="5.5" r="1.8"/><path d="M 332.9 288.3 Q 473.4 221.3, 614.7 156.1 Q 473.0 220.4, 332.1 286.4 Z"/><path d="M 397.3 341.8 Q 510.7 356.4, 624.1 371.4 Q 510.9 355.2, 397.7 339.1 Z"/><circle cx="624.1" cy="371.4" r="3.2"/><circle cx="642.9" cy="374.0" r="0.9"/><path d="M 309.3 296.4 Q 407.2 250.3, 500.6 195.4 Q 406.8 249.4, 308.3 294.6 Z"/><circle cx="521.6" cy="184.4" r="0.8"/><circle cx="556.7" cy="166.0" r="0.9"/><path d="M 289.5 308.8 Q 416.5 249.3, 541.5 185.9 Q 415.8 248.0, 288.0 305.7 Z"/><circle cx="541.5" cy="185.9" r="4.1"/><path d="M 286.6 306.9 Q 362.7 254.6, 442.6 208.4 Q 361.7 253.0, 284.5 303.4 Z"/><circle cx="442.6" cy="208.4" r="2.7"/><circle cx="456.6" cy="199.7" r="1.2"/><circle cx="473.6" cy="189.3" r="1.1"/><circle cx="497.6" cy="174.5" r="2.4"/><path d="M 300.7 287.7 Q 402.0 204.7, 498.6 116.3 Q 401.2 203.8, 298.9 285.6 Z"/><circle cx="498.6" cy="116.3" r="1.7"/><circle cx="520.0" cy="97.9" r="1.8"/><path d="M 426.6 347.6 Q 522.7 365.9, 620.2 374.0 Q 522.9 364.3, 427.1 344.2 Z"/><circle cx="620.2" cy="374.0" r="2.7"/><path d="M 311.4 296.2 Q 432.3 229.8, 554.5 165.6 Q 431.5 228.1, 309.5 292.6 Z"/><circle cx="554.5" cy="165.6" r="2.6"/><path d="M 345.9 291.1 Q 405.7 263.9, 468.1 243.6 Q 405.1 262.3, 344.6 287.6 Z"/><circle cx="477.1" cy="240.2" r="2.2"/><circle cx="497.7" cy="232.5" r="2.4"/><path d="M 294.1 312.4 Q 358.1 291.0, 421.9 268.6 Q 357.5 289.1, 292.7 308.3 Z"/><circle cx="421.9" cy="268.6" r="3.7"/><path d="M 247.2 306.9 Q 229.3 314.7, 211.6 323.0 Q 229.9 316.1, 248.5 310.2 Z"/><circle cx="208.1" cy="324.4" r="1.7"/><path d="M 249.5 318.2 Q 214.5 330.1, 178.6 338.0 Q 214.8 331.3, 250.2 320.9 Z"/><circle cx="178.6" cy="338.0" r="2.9"/><circle cx="833.5" cy="227.1" r="0.7"/><circle cx="701.3" cy="110.6" r="0.9"/><circle cx="844.3" cy="156.5" r="1.0"/><circle cx="449.8" cy="318.0" r="3.3"/><circle cx="723.8" cy="426.0" r="0.9"/><circle cx="867.9" cy="386.7" r="0.7"/><circle cx="845.1" cy="482.2" r="0.7"/><circle cx="385.1" cy="336.5" r="3.4"/><circle cx="730.8" cy="112.3" r="0.7"/><circle cx="502.0" cy="259.3" r="2.4"/><circle cx="731.4" cy="13.0" r="1.6"/><circle cx="522.7" cy="78.9" r="2.8"/><circle cx="312.7" cy="329.6" r="4.7"/><circle cx="885.3" cy="281.8" r="0.7"/><circle cx="814.2" cy="403.6" r="1.0"/><circle cx="600.5" cy="271.8" r="2.2"/><circle cx="566.2" cy="40.2" r="2.2"/><circle cx="707.8" cy="432.7" r="0.9"/><circle cx="623.2" cy="18.0" r="1.4"/><circle cx="819.2" cy="18.6" r="1.0"/><circle cx="790.6" cy="174.7" r="1.0"/><circle cx="481.0" cy="108.0" r="3.0"/><circle cx="454.4" cy="375.6" r="4.0"/><circle cx="853.8" cy="428.9" r="1.1"/><circle cx="837.2" cy="482.6" r="0.7"/><circle cx="597.2" cy="368.0" r="1.4"/><circle cx="640.3" cy="71.4" r="1.2"/><circle cx="388.6" cy="275.8" r="3.5"/><circle cx="812.2" cy="100.7" r="0.7"/><circle cx="815.9" cy="438.4" r="1.1"/><circle cx="576.1" cy="174.5" r="2.7"/><circle cx="595.0" cy="368.4" r="1.1"/><circle cx="598.4" cy="315.1" r="2.3"/><path d="M 598.4 313.8 Q 584.5 315.4, 598.4 316.5 Z"/><circle cx="777.0" cy="439.6" r="0.7"/><circle cx="822.8" cy="60.8" r="1.0"/><circle cx="745.6" cy="373.6" r="0.8"/><circle cx="719.5" cy="320.0" r="2.2"/><circle cx="427.5" cy="276.9" r="2.9"/><path d="M 427.5 275.2 Q 410.8 281.4, 427.5 278.7 Z"/><circle cx="903.8" cy="349.9" r="0.7"/><circle cx="698.8" cy="209.5" r="0.8"/><circle cx="597.3" cy="384.7" r="0.7"/><circle cx="541.7" cy="263.8" r="3.4"/><circle cx="506.6" cy="272.6" r="3.1"/><circle cx="811.4" cy="35.9" r="1.0"/><circle cx="715.4" cy="52.0" r="1.6"/><circle cx="454.7" cy="238.9" r="3.1"/><circle cx="423.8" cy="162.8" r="1.9"/><circle cx="667.1" cy="284.6" r="2.2"/><circle cx="465.8" cy="240.8" r="1.3"/><circle cx="664.9" cy="202.6" r="2.8"/><path d="M 664.9 200.9 Q 648.6 207.4, 664.9 204.3 Z"/><circle cx="492.1" cy="300.0" r="2.9"/><circle cx="851.9" cy="403.5" r="0.7"/><circle cx="521.6" cy="273.8" r="1.7"/><circle cx="359.9" cy="255.0" r="2.5"/><circle cx="804.8" cy="271.9" r="0.9"/><circle cx="685.7" cy="371.9" r="0.9"/><circle cx="662.0" cy="247.8" r="1.1"/><circle cx="619.5" cy="216.0" r="0.7"/><circle cx="477.3" cy="354.3" r="1.9"/><circle cx="797.7" cy="5.8" r="0.7"/><circle cx="757.4" cy="347.8" r="1.2"/><circle cx="524.0" cy="61.9" r="1.4"/><circle cx="479.4" cy="370.6" r="1.1"/><circle cx="375.1" cy="221.1" r="4.4"/><circle cx="805.9" cy="253.4" r="1.6"/><circle cx="733.3" cy="136.8" r="2.1"/><circle cx="761.0" cy="102.9" r="1.7"/><circle cx="356.7" cy="320.1" r="4.5"/><circle cx="793.5" cy="232.8" r="0.8"/><circle cx="318.7" cy="302.1" r="2.8"/><circle cx="681.3" cy="351.4" r="0.7"/><circle cx="400.1" cy="305.8" r="2.4"/><circle cx="646.3" cy="223.3" r="1.3"/><circle cx="650.0" cy="252.9" r="2.9"/><circle cx="644.4" cy="186.2" r="0.7"/><circle cx="739.4" cy="155.1" r="0.7"/><circle cx="836.8" cy="354.0" r="1.2"/><circle cx="669.7" cy="137.6" r="2.2"/><circle cx="793.9" cy="72.8" r="0.7"/><circle cx="695.7" cy="186.7" r="1.7"/><circle cx="580.9" cy="247.1" r="2.1"/><circle cx="861.8" cy="419.9" r="0.8"/><circle cx="601.4" cy="352.5" r="1.0"/><circle cx="800.3" cy="300.8" r="1.2"/><circle cx="796.7" cy="272.6" r="1.2"/><circle cx="644.3" cy="419.9" r="0.7"/><circle cx="587.7" cy="410.3" r="0.7"/><circle cx="824.4" cy="458.2" r="1.3"/><circle cx="591.9" cy="163.7" r="2.8"/><circle cx="629.7" cy="237.5" r="1.1"/><circle cx="472.5" cy="166.7" r="3.6"/><circle cx="690.8" cy="158.1" r="0.8"/><circle cx="690.6" cy="417.3" r="0.9"/><circle cx="468.8" cy="267.4" r="0.9"/><circle cx="497.9" cy="94.5" r="1.3"/><circle cx="679.2" cy="435.5" r="1.9"/><circle cx="435.6" cy="322.6" r="4.5"/><circle cx="418.3" cy="344.1" r="4.9"/><circle cx="887.2" cy="350.5" r="1.0"/><circle cx="815.7" cy="427.3" r="1.5"/><circle cx="437.5" cy="172.5" r="1.0"/><circle cx="495.4" cy="261.3" r="3.8"/><circle cx="682.3" cy="66.2" r="1.8"/><circle cx="749.8" cy="63.4" r="1.0"/><circle cx="635.5" cy="103.9" r="2.6"/><circle cx="479.3" cy="184.9" r="3.3"/><circle cx="750.7" cy="196.0" r="1.4"/><circle cx="797.5" cy="163.3" r="0.7"/><circle cx="876.0" cy="447.6" r="0.7"/><circle cx="625.6" cy="311.7" r="2.7"/><circle cx="553.1" cy="164.7" r="2.0"/><circle cx="590.5" cy="227.8" r="3.4"/><circle cx="878.7" cy="195.1" r="0.7"/><circle cx="825.6" cy="162.5" r="0.7"/><circle cx="424.0" cy="175.6" r="1.8"/><path d="M 240.3 338.3 Q 244.1 388.5, 244.1 388.5 Q 244.1 388.5, 247.8 338.3 Z"/><circle cx="244.1" cy="388.5" r="4.2"/></g></svg></span><br />
            <span className="relative z-10">Start</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10">owning it.</span>
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
