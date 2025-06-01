---
layout: post
title: Basic overview of Intel's historical CPUs
description: A brief overview of Intel's historical CPUs and the changes to its microarchitecture.
date: 3rd February 2025
---

**Intel Series**: Part 1

In this post, I will be going over the history of several historical Intel CPUs that introduced several technologies that has benefited modern day compute, and the world. I referred to the [Intel® 64 and IA-32 Architectures Software Developer’s Manual](https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html), Volume 1: Basic Architecture for the list of CPUs (I digest this manual in my free time).

This article is the first of a series of posts where I cover Intel (products, technologies, etc.) in detail, as an enthusiast. This is a hobby of mine, and I hope you enjoy reading it as much as I enjoy writing it.

As of the writing of this post, Intel is not as great as it once was. While it is true that Intel is still considered dominant, especially in the consumer market (the enthusiasts excluded, they jumped to AMD), but it does not mean that we get to neglect its contributions and the impact that it has had on the world. Intel, is considered as the company that placed "Silicon" in "Silicon Valley"!

It is recommended that you have an basic/intermediate understanding of the x86 architecture and computer science in general. Worry not, there are links attached for further reading and explanations.

**WARNING**: This post is a long one!

## Intel 8086

The 8086 was the first x86 CPU that Intel released, back in 1978. It has 16-bit registers and 16-bit external data bus, with 20-bit addressing giving an impressive 1 MB address space.

This CPU introduced [segmentation](https://en.wikipedia.org/wiki/Memory_segmentation). With segmentation, a 16-bit segment register contains a pointer to a memory segment of up to 64 KB. Using four segment registers at once, the 8086 processors can address up to 256 KB without switching between segments. The 20-bit addresses can be formed using a segment register and an additional 16-bit pointer provides a total address range of up to 1MB.

## Intel 286 (80286)

In 1982, Intel released the Intel 286 processor. It introduced [protected mode](https://en.wikipedia.org/wiki/Protected_mode) operation into the IA-32 architecture. This mode uses the segment register content as selectors or pointers into descriptor tables. Descriptors provide 24-bit base addressses with a physical memory size of up to 16 MB, support for virtual memory management (on a segment swapping basis), and a number of protection mechanisms which includes:

- — Segment limit checking.
- — Read-only and execute-only segment options.
- — Four privilege levels.

## Intel386 (80386)

Released in 1985, the 386 was the first 32-bit processor in the IA-32 architecture and introduced 32-bit registers for use to hold both operands and addressing. The lower half of each 32-bit register retains the properties of earlier generation's 16-bit registers - hence allowed backward compatibility. It also provides a virtual 8086 mode for executing programs that were written for the 8086.

Additionally, the 386 also has support for:

- — A 32-bit address bus, allowing for a 4 GB address space.
- — Segmented-memory and flat memory models.
- – Paging, with a fixed 4 KB page size which provides a method of virtual memory management.
- – Parellel stages.

## Intel486

Unveiled in 1989, the 486 added more parellel execution capabilities by expanding the 386's instruction pipeline to 5 stages, with each stage operating in parellel with the others on up to 5 instructions in different stages of execution.

The processor also added the following:

- – An 8 KB on-chip first-level (L1) cache.
- – An integrated x87 [FPU (floating-point unit)](https://en.wikipedia.org/wiki/Floating-point_unit).
- – Power saving and system management features.

## Intel Pentium Family

The introduction of Pentium in 1993 added a second execution pipeline which allows the processor to achieve superscalar performance. The two pipelines together can execute two instructions per clock in parellel. The on-chip L1 cache doubled - with 8 KB devoted to code and another 8 KB devoted to data.

Another significant addition was the introduction of [branch prediction](https://en.wikipedia.org/wiki/Branch_predictor), which improved performance in looping constructs.

In addition, Pentium also added features highlighted below:

- – Extensions to make the virtual 8086 mode more efficient.
- – Internal data paths of 128 and 256 bits.
- – Burstable external data bus was increased to 64 bits.
- – An [APIC](https://en.wikipedia.org/wiki/Advanced_Programmable_Interrupt_Controller) which allows for multiple processors to be connected to a single system bus.
- – Dual processor mode.

This processor was also the first to support the [MMX](https://en.wikipedia.org/wiki/MMX_(instruction_set)) technology.

## Intel P6 Family (Pentium Pro, Pentium II, Pentium III)

The P6 family of processors was based on a superscalar microarchitecture, which set new performance standards, released from 1995 to 1999. It consists of various processors, such as the Pentium Pro, Pentium II, Pentium II and III (and its Xeon variants), and Celeron. However, this section will focus primarily on the Pentium Pro, Pentium II, and Pentium III processors.

### Pentium Pro

A three-way superscalar processor, which is capable of executing three instructions per clock cycle using parellel processing techniques. It also introduced dynamic execution (micro-data flow analysis, out-of-order execution, superior branch prediction, and speculative execution). It has the same cache as the Pentium, but with a 256 KB L2 cache.

### Pentium II

Introduces the previously mentioned MMX technology (from the Pentium) to the P6 microarchitecture, along with some other enhancements to packaging and hardware. The L1 caches were enlarged to 16 KB each, and the L2 cache supported 256 KB, 512 KB, and 1 MB sizes. To conserve power during idle periods, the Pentium II also introduced AutoHALT, Stop-Grant, Sleep, and Deep Sleep.

The Xeon variant featured a 2 MB L2 cache, and some enhancements to its backside bus.

### Pentium III

The Pentium III introduced the [SSE (Streaming SIMD Extensions)](https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions) to the IA-32 architecture. SSE expands the SIMD execution model introduced with Intel MMX technology by providing 128-bit registers and the ability to perform SIMD operations on packed single precision floating-point values.

Its Xeon variant has minor enhancements made to extend the performance of the processor.

## Intel Pentium 4 Family

Released from the dawn of the new millenium to 2006, the Pentium 4 family is based on the [NetBurst](https://en.wikipedia.org/wiki/NetBurst) microarchitecture. This processor introduces [SSE2](https://en.wikipedia.org/wiki/SSE2), and its 3.40 GHz version is the first to support [Hyper-Threading Technology](https://en.wikipedia.org/wiki/Hyper-threading) and [SSE3](https://en.wikipedia.org/wiki/SSE3).

The [Intel 64](https://en.wikipedia.org/wiki/X86-64) architecture is introduced with the Pentium 4 Extreme Edition (which also supports Hyper-Threading Technology) and in Intel Pentium 4 6xx and 7xx series processors.

[Intel Virtualization Technology](https://en.wikipedia.org/wiki/X86_virtualization#Intel_virtualization_(VT-x)) is then introduced in the Pentium 4 672 and 662.

## Intel Xeon Family

Intel Xeon processors (except for the dual-core Xeon LV and Xeon 5100 series) are based on the Intel NetBurst microarchitecture released from 2001 to 2007. This family of processors are designed for use in multiprocessor server systems and high-performance workstations.

Hyper-Threading Technology is introduced for Xeon processors by the Xeon MP.

The 64-bit Intel Xeon 3.6 GHz was used to introduce the Intel 64 architecture for 64-bit computing. The Dual-Core Xeon processors included dual core technology, and the Xeon 70xx series processors included Intel Virtualization Technology.

The Xeon processor 5100 series introduces power-efficient, high performance [Intel Core](https://en.wikipedia.org/wiki/Intel_Core_(microarchitecture)) microarchitecture. This processor is based on Intel 64 architecture and has the latest technologies introduced with the other Xeon processors. Xeon 3000 series and the Xeon 5300 series are also based on the Intel Core microarchitecture, but the latter has 4 cores in a single package.

## Intel Pentium M Family

This family of processors are designed for use in high performance, low power mobile systems with microarchitectural enhancements over previous IA-32 processors. Released from 2003 to 2006.

Its enhanced microarchitecture includes:

- – Support for Intel Architecture with Dynamic Execution.
- – A single high performance, low-power core with copper interconnects.
- – On-die, primary 32 KB instruction cache and 32 KB write-back data cache.
- – On-die, second-level cache with up to 2 MB of cache memory with Advanced Transfer Cache Technology.
- – Advanced branch prediction and data prefetch logic.
- – Support for MMX, SSE, and the SSE2 instruction set
- – Enhanced power management using the Enhanced Intel SpeedStep technology.

## Intel Core Duo and Core Solo Family

In 2006-2007, Intel introduced the Core Duo which offers power-efficient, dual-core performance and its Core Solo counterpart offer microarchitectural enhancements over the Pentium M.

The enhancements are as follows:

- – Intel Smart Cache.
- – Improved decoding and SIMD execution.
- – Intel Dynamic Power Coordination and Enhanced Intel Deeper Sleep to reduce power consumption.
- – Intel Advanced Thermal Manager which features digital thermal sensor interfaces.
- – Support for power-optimised 667 MHz bus.

The dual-core Intel Xeon processor LV is based on the same microarchitecture as Intel Core Duo processor, and supports the IA-32 architecture.

## Intel Xeon 5100, 5300 series and Intel Core 2 Family

Unveiled in 2006, processors in this family - Xeon 3000, 3200, 5100, 5300 series, Pentium Dual-Core, Core 2 Extreme, Core 2 Quad, and Core 2 Duo, are processors that supports the Intel 64 architecture and are based on the Intel Core microarchitecture.

The microarchitecture changes includes:

- – Intel Wide Dynamic Execution.
- – Intel Intelligent Power Capability.
- – Intel Advanced Smart Cache, enables efficient data sharing between 2 cores.
- – Intel Smart Memory Access, increases bandwidth and reduces latency.
- – Intel Advanced Digital Media Boost, which improves application performance using multiple generations of SSEs.

The Xeon 5300 series, Core 2 Extreme QX6800 series, and Core 2 Quad processors support quad-core technology.

## Intel Xeon 5200, 5400, 7400 series and Intel Core 2 Family

The CPUs of this family are based on the Enhanced Intel Core microarchitecture alongside support for the Intel 64 architecture, and is released in 2007.

The Enhanced Intel Core microarchitecture includes the following improvements:

- – A radix-16 divider and faster OS primitives increases the performance of Intel Wide Dynamic Execution.
- – Improved Intel Advanced Smart Cache with 50% larger L2 cache and 50% increase in way-set associativity.
- – A 128-bit shuffler engine which improves the performance of Intel Advanced Digital Media Boost and SSE4.

The Xeon 5400 series and the Core 2 Quad Q9000 Series support quad-core technology. The Xeon 7400 series offers up to six pcores and an L3 cache up to 16 MB.

## Intel Atom Family

As small form-factor compute devices become increasingly popular, Intel introduced the Atom family of processors in 2008. These processors uses the new Intel Atom microarchitecture which is designed for ultra low power devices and energy efficiency.

The initial Atom processors with its Atom microarchitecture includes features listed below:

- – Enhanced Intel SpeedStep Technology.
- – Intel Hyper-Threading Technology.
- – Support for instruction set extensions which includes SSSE3.
- – Support for Intel Virtualization Technology.
- – Support for Intel 64 architecture (excluding Atom Z5xx series).

In 2013, Intel introduced the Intel Atom processors based on the Silvermont microarchitecture which included several additional instruction set extensions.

## Intel Core i7 Family

In 2008, Intel unveiled the Core i7 900 series which is based on the Nehalem microarchitecture. It is also used in the Xeon 5500 series processors, and has the following features:

- – Intel Turbo Boost Technology - which converts thermal headroom into higher performance.
- – Intel Hyper-Threading Technology in conjunction with quad-core technology to provide 4 cores and 8 threads.
- – Dedicated power control unit which enables dynamic power management.
- – Integrated memory controller with support for DDR3 memory.
- – 8 MB inclusive Intel Smart Cache (L3).
- – Support for SSE4 and SSE4.1 instruction set extensions.
- – Second generation Intel Virtualization Technology.

## Intel Xeon 7500 series

These processors are released in 2010 and supports the same features as the Core i7 900 series, with a few additional features for high performance compute:

- – Up to 8 cores in a physical package.
- – Up to 24MB of L3 cache.
- – Provides Intel Scalable Memory Interconnect (Intel SMI) channels with Intel 7500 Scalable Memory Buffer to connect to system memory.
- – Advanced RAS supporting software recoverable machine check architecture.

## Intel Core Family

The 2010 Intel Core family of processors spans Intel Core i7, i5, and i3 processors for different segments of consumer markets. These processors are based on the Westmere microarchitecture. The features can include:

- – Deliver smart performance with Intel Hyper-Threading Technology and Intel Turbo Boost Technology.
- – Enhanced Intel Smart Cache and integrated memory controller.
- – Intelligent power gating.
- – Repartitioned platform with on-die integration of integrated graphics.
- – Range of instruction set support including AESNI, PCLMULQDQ, SSE4.1 and SSE4.2.

## Intel Xeon 5600 series

Also released in 2010, the Xeon 5600 series is based on the Westmere microarchitecture and supports the same features as the Intel Core family, plus the following features:

- – Up to 6 cores in a physical package.
- – Up to 12MB of Intel Smart Cache (L3).
- – Flexible Intel Virtualization Technologies across processor and I/O.

## 2nd Gen Intel Core Family

Based on the Sandy Bridge microarchitecture, the 2nd Gen Intel Core family of processors are released in 2011. Its new features include:

- – Processor graphics with built-in features like Intel Quick Sync Video, and Intel Insider.
- – Additional instruction set extensions including AVX.

## Why End Here?

Beyond the 2nd Gen Intel Core family of processors, changes made to the microarchitecture and overall design of the processors have been minimal - until the release of the 12th Gen Alder Lake processors (which introduced the P-Core and E-Core architecture, which deserves its own post), hence why I have decided to end this post here. Besides, its titled "historical" after all.

## Outro

Thanks for reading this post - apologies for the exceptionally long post, and for not posting after 2+ months, but worry not, I have a lot of content in the pipeline.

In **part 2** of the Intel series, I will be covering an brief overview of the Intel Core generations, and the jump from the 11th Gen Intel Core processors to the 12th Gen Intel Core processors, and the introduction of the P-Core and E-Core architecture, alongside its benefits and issues.
