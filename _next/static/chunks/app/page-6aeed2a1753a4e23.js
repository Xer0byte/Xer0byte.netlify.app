(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        8972: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3006))
        },
        3006: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => M
            });
            var n = i(5155),
                a = i(2115),
                r = i(5683),
                s = i(1714),
                o = i(3635);
            let l = e => {
                let {
                    activeSection: t,
                    onInteraction: i
                } = e, r = (0, a.useRef)(null), s = (0, a.useRef)({
                    x: 0,
                    y: 0
                }), l = (0, a.useRef)(null), c = (0, a.useRef)([]), d = (0, a.useRef)(!1), m = (0, a.useRef)(6e3), h = (0, a.useRef)({
                    start: "#000000",
                    middle: "#000000",
                    end: "#0B0B1F"
                }), x = () => Math.min(Math.floor(window.innerWidth * window.innerHeight / 15e3 * (window.devicePixelRatio > 1 ? .5 : 1)), 120), u = (e, t) => {
                    e.beginPath(), t.forEach(t => {
                        e.moveTo(t.x, t.y), e.arc(t.x, t.y, t.size, 0, 2 * Math.PI)
                    }), e.fill()
                }, p = (0, o.useDrag)(e => {
                    let {
                        movement: [t, i],
                        down: n
                    } = e;
                    n && g(i / window.innerHeight * Math.PI, t / window.innerWidth * Math.PI)
                }), g = (e, t) => {
                    c.current.forEach(i => {
                        let {
                            x: n,
                            y: a,
                            z: r
                        } = w(i.x - window.innerWidth / 2, i.y - window.innerHeight / 2, i.z, e, t);
                        i.x = n + window.innerWidth / 2, i.y = a + window.innerHeight / 2, i.z = r
                    })
                }, v = (e, t) => ({
                    x: e,
                    y: t,
                    baseX: e,
                    baseY: t,
                    originalX: e,
                    originalY: t,
                    vx: (Math.random() - .5) * 4,
                    vy: (Math.random() - .5) * 4,
                    size: 2 * Math.random() + 1,
                    color: "white",
                    active: !0,
                    z: 0,
                    rotationSpeed: .02 * Math.random() - .01,
                    depth: 1e3 * Math.random(),
                    distanceFromMouse: 0,
                    trail: [],
                    angle: Math.random() * Math.PI * 2,
                    orbitSpeed: (Math.random() - .25) * .03,
                    orbitRadius: 150 * Math.random() + 50
                });
                (0, a.useEffect)(() => {
                    let e;
                    let n = l.current,
                        a = n.getContext("2d", {
                            alpha: !1
                        }),
                        o = () => {
                            let e = x();
                            c.current = Array(e).fill(null).map(() => ({
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                baseX: Math.random() * window.innerWidth,
                                baseY: Math.random() * window.innerHeight,
                                originalX: 0,
                                originalY: 0,
                                vx: 0,
                                vy: 0,
                                size: "home" === t ? 2 * Math.random() + 1 : 1.5,
                                color: "white",
                                active: !1,
                                z: 0,
                                rotationSpeed: "home" === t ? .02 * Math.random() - .01 : 0,
                                depth: "home" === t ? 1e3 * Math.random() : 0,
                                distanceFromMouse: 0,
                                trail: [],
                                angle: Math.random() * Math.PI * 2,
                                orbitSpeed: (Math.random() - .25) * .03,
                                orbitRadius: 150 * Math.random() + 50
                            }))
                        },
                        p = (e, n, a) => {
                            let r = Array(a).fill(null).map(() => v(e, n));
                            c.current = [...c.current, ...r].slice(0, m.current), i({
                                type: "click",
                                section: t
                            })
                        };
                    "home" !== t ? a.filter = "blur(3px)" : a.filter = "none";
                    let g = performance.now(),
                        w = e => {
                            if (e - g < 16) {
                                r.current = requestAnimationFrame(w);
                                return
                            }
                            g = e;
                            let t = a.createRadialGradient(n.width / 2, n.height / 2, 0, n.width / 2, n.height / 2, .8 * n.width);
                            t.addColorStop(0, h.current.start), t.addColorStop(.5, h.current.middle), t.addColorStop(1, h.current.end), a.fillStyle = t, a.fillRect(0, 0, n.width, n.height), a.fillStyle = "rgba(0, 0, 0, 0.1)", a.fillRect(0, 0, n.width, n.height);
                            for (let e = 0; e < c.current.length; e += 50) f(c.current.slice(e, e + 50));
                            a.shadowBlur = 0, a.fillStyle = "white", u(a, c.current), c.current.forEach((e, t) => {
                                for (let i = t + 1; i < c.current.length; i++) {
                                    let t = c.current[i],
                                        n = e.x - t.x,
                                        r = e.y - t.y,
                                        s = Math.sqrt(n * n + r * r);
                                    s < 100 && (a.strokeStyle = "rgba(255, 255, 255, ".concat(.2 * (1 - s / 100), ")"), a.beginPath(), a.moveTo(e.x, e.y), a.lineTo(t.x, t.y), a.stroke())
                                }
                            }), r.current = requestAnimationFrame(w)
                        },
                        f = e => {
                            e.forEach(e => {
                                e.vx *= .98, e.vy *= .98, e.x += e.vx, e.y += e.vy, (e.x < 0 || e.x > n.width) && (e.vx *= -1), (e.y < 0 || e.y > n.height) && (e.vy *= -1);
                                let t = s.current.x - e.x,
                                    i = s.current.y - e.y,
                                    a = Math.sqrt(t * t + i * i);
                                if (a < 200) {
                                    let n = (200 - a) / 200;
                                    e.vx -= t * n * .02, e.vy -= i * n * .02
                                }
                            })
                        },
                        b = () => {
                            clearTimeout(e), e = setTimeout(() => {
                                n.width = window.innerWidth, n.height = window.innerHeight, o()
                            }, 250)
                        },
                        j = 0,
                        y = e => {
                            let t = Date.now();
                            t - j > 16 && (s.current = {
                                x: e.clientX,
                                y: e.clientY
                            }, j = t), s.current = {
                                x: e.clientX,
                                y: e.clientY
                            }, d.current = !0
                        },
                        N = e => {
                            p(e.clientX, e.clientY, 10), c.current.forEach(t => {
                                100 > Math.hypot(t.x - e.clientX, t.y - e.clientY) && (t.vx += (t.x - e.clientX) * .1, t.vy += (t.y - e.clientY) * .1)
                            })
                        };
                    return r.current && cancelAnimationFrame(r.current), window.addEventListener("resize", b), window.addEventListener("mousemove", y), window.addEventListener("click", N), b(), w(performance.now()), () => {
                        r.current && cancelAnimationFrame(r.current), clearTimeout(e), window.removeEventListener("resize", b), window.removeEventListener("mousemove", y), window.removeEventListener("click", N)
                    }
                }, [t, i]), (0, a.useEffect)(() => {
                    let e = {
                        home: {
                            start: "#111011",
                            middle: "#0f0d0d",
                            end: "#1d1d1d"
                        },
                        work: {
                            start: "#0B0B1F",
                            middle: "#1A1A2F",
                            end: "#0F0F1F"
                        },
                        about: {
                            start: "#000000",
                            middle: "#0F1A2F",
                            end: "#0B0B2F"
                        },
                        contact: {
                            start: "#000000",
                            middle: "#0D1B2F",
                            end: "#0A0A1F"
                        }
                    };
                    h.current = e[t] || e.home
                }, [t]);
                let w = (e, t, i, n, a) => {
                    let r = Math.cos(a),
                        s = Math.sin(a);
                    return {
                        x: e * r + i * s,
                        y: t * Math.cos(n) - i * Math.sin(n),
                        z: i * r - e * s
                    }
                };
                return (0, a.useEffect)(() => {
                    let e = e => {
                        "home" === t && c.current.forEach(t => {
                            t.orbitRadius += .1 * e.deltaY, t.orbitRadius = Math.max(50, Math.min(300, t.orbitRadius))
                        })
                    };
                    return window.addEventListener("wheel", e), () => window.removeEventListener("wheel", e)
                }, [t]), (0, n.jsx)("canvas", {
                    ref: l,
                    className: "absolute inset-0 transition-all duration-500 ".concat("home" !== t ? "opacity-50" : "opacity-100"),
                    ...p(),
                    onMouseLeave: () => {
                        d.current = !1
                    }
                })
            };
            var c = i(5565);

            function d() {
                let [e, t] = (0, a.useState)(null), i = [{
                    id: 1,
                    title: "Research-Grade AI Datasets",
                    description: "Led an annotation team at Akademos Research to process, label, and quality-control high-precision datasets for AI model training using Shelfr software. Ensured strict multi-tier accuracy standards and streamlined high-throughput data pipelines.",
                    technologies: ["Shelfr", "AI Data Annotation", "Quality Control", "Team Leadership", "Research Datasets"],
                    image: "/projects/akademos-annotation.png",
                    link: "https://github.com/Xer0byte",
                    details: {
                        features: [
                            "High-precision AI data annotation using Shelfr software",
                            "Team leadership managing daily annotation throughput & workflow",
                            "Multi-tier quality verification and error analysis",
                            "Standardized labeling guidelines for junior annotators",
                            "Recognized as top-performing annotator in Lahore office"
                        ],
                        impact: "Achieved top-tier accuracy, speed, and consistent output across large-scale research AI datasets."
                    }
                }, {
                    id: 2,
                    title: "AI-Powered Chatbot",
                    description: "An intelligent chatbot built with Python, LangChain, and OpenAI API, capable of handling complex customer inquiries, automating support tasks, and seamlessly integrating with modern web frontends.",
                    technologies: ["Python", "LangChain", "OpenAI API", "React", "FastAPI"],
                    image: "/projects/boot-writer.jpg",
                    link: "https://github.com/Xer0byte/BookWriter-Lamma3.1-OPENAI",
                    details: {
                        features: [
                            "Context-aware conversational intelligence using LangChain",
                            "Integration with OpenAI GPT-4 API for nuanced responses",
                            "Custom knowledge base retrieval and document QA",
                            "Interactive web interface built with React and Tailwind CSS",
                            "Automated customer query classification and escalation"
                        ],
                        impact: "Reduced customer inquiry response times by over 80% with automated resolution."
                    }
                }, {
                    id: 3,
                    title: "E-Commerce Dashboard",
                    description: "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data with interactive visualizations, real-time analytics, and secure administrative controls.",
                    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
                    image: "/projects/foot-ai.jpg",
                    link: "https://github.com/Xer0byte/BRP-SizeMeasure",
                    details: {
                        features: [
                            "Real-time sales, order, and customer tracking",
                            "Interactive visual charts and performance analytics",
                            "Role-based access control and inventory monitoring",
                            "Responsive layout built with React and Tailwind CSS",
                            "RESTful backend API connecting to MongoDB"
                        ],
                        impact: "Delivered intuitive business metrics enabling immediate operational decisions."
                    }
                }, {
                    id: 4,
                    title: "Predictive Analytics Model",
                    description: "A machine learning model designed to predict market trends and customer behavior, helping businesses make data-driven decisions with high statistical confidence.",
                    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
                    image: "/projects/library.png",
                    link: "https://github.com/Xer0byte",
                    details: {
                        features: [
                            "Data cleaning and automated preprocessing pipelines",
                            "Feature engineering and regression/classification modeling",
                            "Interactive charts and correlation matrices",
                            "Model evaluation with cross-validation and metrics reporting",
                            "Exportable insights and automated prediction reports"
                        ],
                        impact: "Enhanced forecasting accuracy by 65% through data-driven predictive modeling."
                    }
                }, {
                    id: 5,
                    title: "Architectural 3D Model & Floor Plans",
                    description: "A detailed 3D architectural model and floor plan designed using AutoCAD and Revit for residential and commercial structures, including full MEP drainage and water piping layouts.",
                    technologies: ["AutoCAD 2D/3D", "Revit", "MEP Drafting", "Architecture", "Floor Plans"],
                    image: "/projects/library.png",
                    link: "https://github.com/Xer0byte/Superior-Univerity-Library-Ai",
                    details: {
                        features: [
                            "Custom architectural 2D and 3D floor plan designs",
                            "Drainage and water supply system layout blueprints",
                            "Precise modeling adhering to international drafting standards",
                            "3D visualization and client presentation renders in Revit",
                            "Structural design coordination with engineering teams"
                        ],
                        impact: "Delivered 100% standard-compliant blueprints for international engineering clients."
                    }
                }];
                return (0, n.jsx)(s.P.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "w-full max-w-6xl mx-auto p-8",
                    children: (0, n.jsx)(r.N, {
                        mode: "wait",
                        children: e ? (0, n.jsx)(m, {
                            project: i.find(t => t.id === e),
                            onClose: () => t(null)
                        }) : (0, n.jsx)(s.P.div, {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: i.map(e => (0, n.jsxs)(s.P.div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "bg-black/20 backdrop-blur-sm rounded-lg p-4 cursor-pointer",
                                onClick: () => t(e.id),
                                layoutId: "project-".concat(e.id),
                                children: [(0, n.jsxs)("div", {
                                    className: "relative h-48 mb-4",
                                    children: [(0, n.jsx)(c.default, {
                                        src: e.image,
                                        alt: e.title,
                                        layout: "fill",
                                        objectFit: "cover",
                                        className: "rounded-lg"
                                    }), (0, n.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"
                                    })]
                                }), (0, n.jsx)("h3", {
                                    className: "text-xl font-bold text-white",
                                    children: e.title
                                }), (0, n.jsx)("p", {
                                    className: "text-gray-300 mt-2 line-clamp-2",
                                    children: e.description
                                }), (0, n.jsx)("div", {
                                    className: "flex flex-wrap gap-2 mt-4",
                                    children: e.technologies.map(e => (0, n.jsx)("span", {
                                        className: "px-2 py-1 bg-white/10 rounded-full text-sm text-white",
                                        children: e
                                    }, e))
                                })]
                            }, e.id))
                        })
                    })
                })
            }

            function m(e) {
                let {
                    project: t,
                    onClose: i
                } = e;
                return (0, n.jsxs)(s.P.div, {
                    layoutId: "project-".concat(t.id),
                    className: "bg-black/40 backdrop-blur-md rounded-lg p-8 max-w-4xl mx-auto",
                    children: [(0, n.jsx)("button", {
                        onClick: i,
                        className: "absolute top-4 right-4 text-white hover:text-gray-300",
                        children: "✕"
                    }), (0, n.jsx)(c.default, {
                        src: t.image,
                        alt: t.title,
                        width: 800,
                        height: 400,
                        className: "w-full h-64 object-cover rounded-lg mb-6"
                    }), (0, n.jsx)("h2", {
                        className: "text-3xl font-bold text-white mb-4",
                        children: t.title
                    }), (0, n.jsx)("p", {
                        className: "text-gray-300 mb-6",
                        children: t.description
                    }), (0, n.jsxs)("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-xl font-bold text-white mb-3",
                                children: "Key Features"
                            }), (0, n.jsx)("ul", {
                                className: "list-disc list-inside text-gray-300 space-y-2",
                                children: t.details.features.map((e, t) => (0, n.jsx)("li", {
                                    children: e
                                }, t))
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h3", {
                                className: "text-xl font-bold text-white mb-3",
                                children: "Impact"
                            }), (0, n.jsx)("p", {
                                className: "text-gray-300",
                                children: t.details.impact
                            }), (0, n.jsx)("div", {
                                className: "mt-6",
                                children: (0, n.jsxs)("a", {
                                    href: t.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white",
                                    children: ["View Project ", (0, n.jsx)("span", {
                                        children: "→"
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            }
            let h = ["AI Data Annotation", "Shelfr Software", "Quality Control", "Team Leadership", "Python", "C++", "AI", "HTML", "CSS", "JS", "Node.js", "Computer Engineering", "Problem Solving", "Web Development", " SEO(Expert)", "AutoCAD", "Revit", "Database Management"],
                x = (0, a.memo)(e => {
                    let {
                        title: t,
                        institution: i,
                        period: a,
                        details: r,
                        coursework: s
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "relative pl-8 border-l-2 border-emerald-800",
                        children: [(0, n.jsx)("div", {
                            className: "absolute w-4 h-4 bg-emerald-800 rounded-full -left-[9px] top-0"
                        }), (0, n.jsx)("h3", {
                            className: "text-xl font-bold",
                            children: t
                        }), (0, n.jsxs)("p", {
                            className: "text-gray-300",
                            children: [i, " (", a, ")"]
                        }), (0, n.jsx)("p", {
                            className: "mt-2 text-gray-400",
                            children: r
                        }), s && (0, n.jsx)("p", {
                            className: "mt-1 text-gray-400",
                            children: s
                        })]
                    })
                });
            x.displayName = "EducationItem";
            let u = (0, a.memo)(e => {
                let {
                    title: t,
                    issuer: i,
                    location: a,
                    year: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: "bg-zinc-900/40 hover:bg-zinc-800/40 transition-all p-4 md:p-6 rounded-lg  border border-zinc-800 hover:border-zinc-700",
                    children: [(0, n.jsx)("h3", {
                        className: "text-lg md:text-xl font-bold mb-2 text-emerald-400",
                        children: t
                    }), (0, n.jsx)("p", {
                        className: "text-gray-200 text-sm md:text-base",
                        children: i
                    }), (0, n.jsxs)("p", {
                        className: "text-gray-400 text-sm",
                        children: [a, ", ", r]
                    })]
                })
            });
            u.displayName = "CertificationCard";
            let p = (0, a.memo)(e => {
                let {
                    company: t,
                    role: i,
                    duration: a,
                    location: r,
                    type: s,
                    skills: o,
                    description: l
                } = e;
                return (0, n.jsxs)("div", {
                    className: "bg-zinc-900/40 hover:bg-zinc-800/40 transition-all p-4 md:p-6 rounded-lg  border border-zinc-800 hover:border-zinc-700",
                    children: [(0, n.jsx)("h3", {
                        className: "text-lg md:text-xl font-bold text-emerald-400",
                        children: i
                    }), (0, n.jsx)("p", {
                        className: "text-base md:text-lg text-gray-100 mb-2",
                        children: t
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-wrap gap-2 text-xs md:text-sm text-gray-300 mb-3",
                        children: [(0, n.jsx)("span", {
                            children: s
                        }), (0, n.jsx)("span", {
                            children: "•"
                        }), (0, n.jsx)("span", {
                            children: a
                        }), (0, n.jsx)("span", {
                            children: "•"
                        }), (0, n.jsx)("span", {
                            children: r
                        })]
                    }), l && (0, n.jsx)("p", {
                        className: "text-gray-300 mb-3 text-sm md:text-base",
                        children: l
                    }), (0, n.jsx)("div", {
                        className: "flex flex-wrap gap-1.5 md:gap-2",
                        children: o.map(e => (0, n.jsx)("span", {
                            className: "text-xs md:text-sm bg-zinc-800/80 px-2 py-1 rounded-full  text-emerald-400",
                            children: e
                        }, e))
                    })]
                })
            });

            function g() {
                let [e, t] = (0, a.useState)(0), i = (0, a.useMemo)(() => ["intro", "experience", "skills", "education", "certifications"], []), [r, o] = (0, a.useState)(!1), l = (0, a.useRef)(Date.now()), c = (0, a.useRef)(null), d = (0, a.useRef)(0), m = (0, a.useCallback)(e => {
                    let n = Date.now();
                    if (!(n - l.current < 800) && e >= 0 && e < i.length && !r) {
                        o(!0), t(e), l.current = n;
                        let a = document.getElementById(i[e]);
                        a && a.scrollIntoView({
                            behavior: "smooth"
                        }), setTimeout(() => o(!1), 800)
                    }
                }, [r, i]);
                return (0, a.useEffect)(() => {
                    let t = t => {
                        "ArrowUp" === t.key ? (t.preventDefault(), m(e - 1)) : "ArrowDown" === t.key && (t.preventDefault(), m(e + 1))
                    };
                    return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)
                }, [e, m]), (0, a.useEffect)(() => {
                    let t = t => {
                        t.preventDefault(), r || (d.current += t.deltaY, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
                            Math.abs(d.current) > 50 && m(e + (d.current > 0 ? 1 : -1)), d.current = 0
                        }, 50))
                    };
                    return window.addEventListener("wheel", t, {
                        passive: !1
                    }), () => window.removeEventListener("wheel", t)
                }, [e, r, m]), (0, a.useEffect)(() => {
                    let t = 0,
                        i = 0,
                        n = e => {
                            t = e.touches[0].clientY, i = Date.now()
                        },
                        a = n => {
                            if (r) return;
                            let a = n.changedTouches[0].clientY,
                                s = Date.now() - i,
                                o = t - a;
                            s < 300 && Math.abs(o) > 50 && m(e + (o > 0 ? 1 : -1))
                        };
                    return window.addEventListener("touchstart", n, {
                        passive: !0
                    }), window.addEventListener("touchend", a, {
                        passive: !0
                    }), () => {
                        window.removeEventListener("touchstart", n), window.removeEventListener("touchend", a)
                    }
                }, [e, r, m]), (0, a.useEffect)(() => {
                    let e = e => e.preventDefault();
                    return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = "auto"
                    }
                }, []), (0, n.jsxs)("div", {
                    className: "h-screen bg-black overflow-hidden",
                    children: [(0, n.jsx)("nav", {
                        className: "hidden md:block fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 space-y-6",
                        children: i.map((t, i) => (0, n.jsxs)("button", {
                            onClick: () => !r && m(i),
                            className: "group flex items-center gap-3",
                            children: [(0, n.jsx)("div", {
                                className: "w-2 h-2 rounded-full transition-all duration-300 \n              ".concat(e === i ? "bg-emerald-400 scale-150" : "bg-zinc-700")
                            }), (0, n.jsx)("span", {
                                className: "text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 \n              transition-opacity duration-300 ".concat(e === i ? "text-emerald-400" : "text-zinc-400"),
                                children: t
                            })]
                        }, t))
                    }), (0, n.jsx)("div", {
                        className: "h-screen overflow-hidden",
                        children: (0, n.jsxs)("div", {
                            className: "h-full transition-transform duration-800 ease-in-out",
                            style: {
                                transform: "translateY(-".concat(100 * e, "vh)"),
                                transition: "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)"
                            },
                            children: [(0, n.jsx)(s.P.section, {
  id: "intro",
                                className: "h-screen flex items-center justify-center p-3 sm:p-6 md:p-8",
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-4xl w-full mx-auto max-h-[82vh] overflow-y-auto px-2 sm:px-4 py-4 space-y-5 pb-24 md:pb-12 text-left",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                                (0, n.jsx)(s.P.h1, {
                                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400",
                                                    initial: { y: 20 },
                                                    animate: { y: 0 },
                                                    children: "Ghaznain Ahmad"
                                                }),
                                                (0, n.jsx)("p", {
                                                    className: "text-xs sm:text-sm md:text-base text-emerald-300 font-mono tracking-wide",
                                                    children: "AI/ML Engineer • Data Annotator • Web & Automation Developer • Founder of Xer0byte"
                                                }),
                                                (0, n.jsx)("p", {
                                                    className: "text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed pt-1",
                                                    children: "I am an AI/ML Engineer, Web Developer, and Automation Specialist passionate about building practical AI solutions. I design intelligent agents, lead AI data annotation teams, develop modern web applications, and apply engineering precision through AutoCAD and 3D design to create impactful digital products."
                                                })
                                            ]
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2 bg-zinc-900/60 p-3 sm:p-4 rounded-xl border border-zinc-800 text-xs",
                                            children: [
                                                { label: "Birthday", val: "31 OCT 2005" },
                                                { label: "Age", val: "21" },
                                                { label: "Degree", val: "Bachelor (BSCS) 2024-28" },
                                                { label: "City", val: "Lahore, Pakistan" },
                                                { label: "Email", val: "ghaznain1122@gmail.com" },
                                                { label: "Phone", val: "+92 329 4733140" },
                                                { label: "Freelance", val: "Available" },
                                                { label: "Website", val: "xer0byte.netlify.app" }
                                            ].map(item => (0, n.jsxs)("div", {
                                                className: "flex flex-col bg-black/40 p-2 rounded-lg border border-zinc-800/60",
                                                children: [
                                                    (0, n.jsx)("span", { className: "text-zinc-500 text-[10px] uppercase tracking-wider", children: item.label }),
                                                    (0, n.jsx)("span", { className: "text-white font-medium truncate text-xs sm:text-sm", children: item.val })
                                                ]
                                            }, item.label))
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1",
                                            children: [
                                                { num: "302+", label: "Happy Clients" },
                                                { num: "211+", label: "Projects Done" },
                                                { num: "1,463+", label: "Support Hours" },
                                                { num: "24+", label: "Awards Won" }
                                            ].map(st => (0, n.jsxs)("div", {
                                                className: "bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 text-center hover:border-emerald-500/40 transition-all",
                                                children: [
                                                    (0, n.jsx)("div", { className: "text-xl sm:text-2xl font-bold text-emerald-400 font-mono", children: st.num }),
                                                    (0, n.jsx)("div", { className: "text-[10px] text-zinc-400 mt-0.5 uppercase tracking-wider", children: st.label })
                                                ]
                                            }, st.label))
                                        })
                                    ]
                                })
                            }), (0, n.jsx)("section", {
  id: "experience",
                                className: "h-screen flex items-center justify-center p-3 sm:p-6 md:p-8",
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-4xl w-full mx-auto max-h-[82vh] overflow-y-auto px-1 sm:px-3 py-2 space-y-4 sm:space-y-6 md:space-y-8 pb-24 md:pb-12",
                                    children: [(0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-emerald-400 mb-4 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10",
                                        children: "Professional Work Experience"
                                    }), (0, n.jsx)("div", {
                                        className: "grid gap-5",
                                        children: (0, n.jsxs)(s.P.div, {
                                            initial: { opacity: 0, y: 20 },
                                            whileInView: { opacity: 1, y: 0 },
                                            transition: { staggerChildren: .1 },
                                            children: [
                                                (0, n.jsx)(p, {
                                                    company: "Akademos Research | Lahore, Pakistan",
                                                    role: "Data Annotator & Team Leader",
                                                    duration: "Apr 2026 – Sep 2026",
                                                    location: "Lahore, Pakistan · On-site",
                                                    type: "Full-time",
                                                    description: "Performed high-quality AI data annotation tasks using Shelfr annotation software for research-grade datasets. Served as Team Leader — managed annotation workflow, ensured quality control, and mentored junior annotators in the office. Recognized as one of the top-performing annotators in Lahore office for exceptional accuracy, speed, and consistent output.",
                                                    skills: ["AI Data Annotation", "Shelfr Software", "Quality Control", "Team Leadership", "Research-Grade Datasets"]
                                                }),
                                                (0, n.jsx)(p, {
                                                    company: "Xer0byte | Lahore, Pakistan",
                                                    role: "Founder & Lead Developer",
                                                    duration: "Jan 2022 – Present",
                                                    location: "Lahore, Pakistan · Remote / Freelance",
                                                    type: "Founder / Full-time",
                                                    description: "Lead development of AI-powered applications, automation tools, and modern web solutions. Built scalable web apps using Python, React, FastAPI, and databases (SQL, MongoDB). Designed and deployed AI/ML models for predictive analytics and business intelligence. Managed client projects end-to-end, ensuring quality and high-impact results.",
                                                    skills: ["Python", "React", "FastAPI", "AI/ML Solutions", "System Architecture", "Client Delivery"]
                                                }),
                                                (0, n.jsx)(p, {
                                                    company: "Upwork | Remote",
                                                    role: "Freelance Web Developer & AI Specialist",
                                                    duration: "Oct 2022 – Present",
                                                    location: "Global Clients · Remote",
                                                    type: "Freelance",
                                                    description: "Delivered custom websites, chatbots, and AI-integrated solutions tailored to client requirements. Hands-on experience with Python, LangChain, OpenAI API, and modern frontend frameworks. Ensured automation of repetitive tasks and optimized workflows for international clients with top client ratings.",
                                                    skills: ["LangChain", "OpenAI API", "Python Automation", "Full-Stack Web Dev", "Client Relations"]
                                                }),
                                                (0, n.jsx)(p, {
                                                    company: "YoungDev Interns | Remote",
                                                    role: "Frontend Development Intern",
                                                    duration: "July 1 – July 28, 2025",
                                                    location: "Remote",
                                                    type: "Internship",
                                                    description: "Developed responsive web interfaces using HTML, CSS, and JavaScript. Completed layout design, form validation, SPA development, API integration, and performance optimization. Received certificate of completion; built a portfolio of web projects.",
                                                    skills: ["HTML5", "CSS3", "JavaScript", "SPA Development", "API Integration", "Responsive Design"]
                                                }),
                                                (0, n.jsx)(p, {
                                                    company: "Benchmark | Innovative Engineering Solutions | Wadic",
                                                    role: "AutoCAD Engineer & MEP Designer",
                                                    duration: "Jun 2024 – Present · On-site",
                                                    location: "Lahore, Punjab, Pakistan · On-site",
                                                    type: "Full-time",
                                                    description: "Created precise 2D/3D technical drawings and detailed floor plans for UK-based architectural firm. Designed Drainage and Water Supply systems for infrastructure projects in Saudi Arabia and Pakistan. Produced single-line and double-line AutoCAD drawings for large-scale MEP projects ensuring 100% adherence to international drafting standards.",
                                                    skills: ["AutoCAD 2D & 3D", "Revit", "MEP Drafting", "Drainage & Water Supply", "Technical Floor Plans"]
                                                }),
                                                (0, n.jsx)(p, {
                                                    company: "Freelance | Remote",
                                                    role: "Data Analyst (Python Specialist)",
                                                    duration: "Oct 2023 – May 2024 · Remote",
                                                    location: "San Jose, California, United States · Remote",
                                                    type: "Freelance",
                                                    description: "Video Downsampling Integration for Testing Pipeline. Specialized in data cleaning, exploratory analysis, and visualization using Pandas, NumPy, Matplotlib, and Seaborn for data-driven pipelines.",
                                                    skills: ["Python (Pandas, NumPy)", "Data Cleaning", "Matplotlib & Seaborn", "Statistical Analysis", "MS Office"]
                                                })
                                            ]
                                        })
                                    })]
                                })
                            }), (0, n.jsx)("section", {
  id: "skills",
                                className: "h-screen flex items-center justify-center p-3 sm:p-6 md:p-8",
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-4xl w-full mx-auto max-h-[82vh] overflow-y-auto px-1 sm:px-3 py-2 pb-24 md:pb-12 space-y-6",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-emerald-400 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10",
                                            children: "Technical Skills & Competencies"
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-3.5",
                                            children: [
                                                { name: "Python", pct: 90 },
                                                { name: "Machine Learning / AI", pct: 85 },
                                                { name: "Deep Learning (TensorFlow, PyTorch, HuggingFace)", pct: 75 },
                                                { name: "AI Data Annotation (Shelfr, QC & Labeling)", pct: 80 },
                                                { name: "Web Development (HTML, CSS, JavaScript, React)", pct: 100 },
                                                { name: "CSS & Modern Responsive Design", pct: 90 },
                                                { name: "Backend (FastAPI, Flask, Node.js)", pct: 70 },
                                                { name: "Databases (PostgreSQL, MongoDB, SQL)", pct: 70 },
                                                { name: "Automation & Web Scraping", pct: 85 },
                                                { name: "Cloud & DevOps (AWS, Docker, GitHub Actions)", pct: 65 },
                                                { name: "Git/GitHub (Version Control)", pct: 90 },
                                                { name: "AutoCAD (2D/3D Design & Drafting)", pct: 75 },
                                                { name: "Engineering Design (Architectural + Mechanical)", pct: 70 }
                                            ].map(sk => (0, n.jsxs)("div", {
                                                className: "bg-zinc-900/60 p-3 rounded-lg border border-zinc-800",
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: "flex justify-between text-xs sm:text-sm font-medium mb-1.5",
                                                        children: [
                                                            (0, n.jsx)("span", { className: "text-zinc-200", children: sk.name }),
                                                            (0, n.jsx)("span", { className: "text-emerald-400 font-mono", children: sk.pct + "%" })
                                                        ]
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: "w-full bg-zinc-800 rounded-full h-2 overflow-hidden",
                                                        children: (0, n.jsx)("div", {
                                                            className: "bg-emerald-400 h-2 rounded-full",
                                                            style: { width: sk.pct + "%" }
                                                        })
                                                    })
                                                ]
                                            }, sk.name))
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "pt-2 space-y-2",
                                            children: [
                                                (0, n.jsx)("h3", {
                                                    className: "text-base sm:text-lg font-bold text-zinc-300",
                                                    children: "Areas of Interest & Research"
                                                }),
                                                (0, n.jsx)("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        "Programming", "AI/ML", "Data Annotation", "Tech Research", "Security Testing",
                                                        "Problem Solving", "Design Thinking", "Networking", "Scheduling", "Arts",
                                                        "Music & Singing", "Gaming", "Traveling", "Marketing"
                                                    ].map(it => (0, n.jsx)("span", {
                                                        className: "bg-zinc-900 border border-emerald-500/20 text-emerald-300/90 text-xs px-3 py-1.5 rounded-full hover:border-emerald-400 transition-colors",
                                                        children: it
                                                    }, it))
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }), (0, n.jsx)("section", {
  id: "education",
                                className: "h-screen flex items-center justify-center p-3 sm:p-6 md:p-8",
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-4xl w-full mx-auto max-h-[82vh] overflow-y-auto px-1 sm:px-3 py-2 pb-24 md:pb-12 space-y-4 sm:space-y-6 md:space-y-8",
                                    children: [(0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-emerald-400 mb-4 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10",
                                        children: "Educational Qualifications"
                                    }), (0, n.jsxs)("div", {
                                        className: "space-y-6",
                                        children: [
                                            (0, n.jsx)(x, {
                                                title: "Bachelor's of Computer Science (BSCS)",
                                                institution: "NCBA&E (National College of Business Administration & Economics), Lahore",
                                                period: "2024 – 2028 (Pursuing)",
                                                details: "4-year comprehensive program equipping students with strong foundations in computer science, programming, algorithms, AI/ML, web development, and database management.",
                                                coursework: "Core Focus: Full-Stack Development, Artificial Intelligence & Machine Learning, Intelligent Systems, TensorFlow & Model Training"
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "Intermediate in Computer Science (ICS)",
                                                institution: "GC University (GCU), Lahore",
                                                period: "2023 – 2024",
                                                details: "Built a solid foundation in analytical thinking, problem-solving, Mathematics, Physics, and Computer Science.",
                                                coursework: "Relevant Coursework: Web Development Techniques, Programming in C++ & Python (Basics), Object-Oriented Programming (OOP), Logic Building"
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "Matriculation with Computer Science",
                                                institution: "Allied School, Saddar Campus, Lahore",
                                                period: "2022 – 2023",
                                                details: "Early exposure to computing principles, computer fundamentals, programming fundamentals, and problem-solving.",
                                                coursework: "Foundations of Computer Hardware, Software, Programming Fundamentals, Mathematics"
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "AutoCAD with Revit Professional",
                                                institution: "NAVTTC (National Vocational and Technical Training Commission)",
                                                period: "2023 – 2024",
                                                details: "2D & 3D Drafting (Civil & Mechanical), Drainage & Water Supply System Designs, Structural & Architectural Drawings, Technical Drawings & Floor Plans.",
                                                coursework: "Hands-on Training in Blueprint Reading, CAD Modeling, and Construction Drawings Compliance"
                                            })
                                        ]
                                    })]
                                })
                            }), (0, n.jsx)("section", {
  id: "certifications",
                                className: "h-screen flex items-center justify-center p-3 sm:p-6 md:p-8",
                                children: (0, n.jsxs)("div", {
                                    className: "max-w-4xl w-full mx-auto max-h-[82vh] overflow-y-auto px-1 sm:px-3 py-2 pb-24 md:pb-12",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-emerald-400 mb-6 sticky top-0 bg-black/80 backdrop-blur-sm py-2 z-10",
                                            children: "Licenses & Certifications"
                                        }),
                                        (0, n.jsx)(s.P.div, {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            initial: { opacity: 0 },
                                            whileInView: { opacity: 1 },
                                            transition: { staggerChildren: .1 },
                                            children: [
                                                { title: "Data Annotation & Team Leadership", issuer: "Akademos Research Office", loc: "Lahore, Pakistan", yr: "2026" },
                                                { title: "Artificial Intelligence Fundamentals", issuer: "IBM", loc: "Online Credential", yr: "2025" },
                                                { title: "Introduction to Modern AI", issuer: "Cisco", loc: "Global", yr: "2025" },
                                                { title: "Make Data Available in Azure Machine Learning", issuer: "Microsoft", loc: "Cloud Certification", yr: "2025" },
                                                { title: "Introduction to AI With Python", issuer: "HarvardX", loc: "Verified", yr: "2025" },
                                                { title: "Frontend Development Internship", issuer: "YoungDev Interns", loc: "Remote", yr: "2025" },
                                                { title: "Generative AI & Machine Learning Specialization", issuer: "Google Cloud", loc: "Global", yr: "2024" },
                                                { title: "Introduction to AI & Machine Learning", issuer: "Google Cloud", loc: "Global", yr: "2024" },
                                                { title: "Advanced AutoCAD with Revit Professional", issuer: "NAVTTC", loc: "Lahore, Pakistan", yr: "2024" },
                                                { title: "Python for Data Analysis & Web Dev", issuer: "Coursera", loc: "Verified", yr: "2023" },
                                                { title: "SEO (Expert) & Professional Freelancing", issuer: "DigiSkills.pk", loc: "Pakistan", yr: "2022" },
                                                { title: "Python Coder Certification", issuer: "Kaggle", loc: "Global", yr: "2025" }
                                            ].map(cr => (0, n.jsx)(u, {
                                                title: cr.title,
                                                issuer: cr.issuer,
                                                location: cr.loc,
                                                year: cr.yr
                                            }, cr.title))
                                        })
                                    ]
                                })
                            })]
                        })
                    })]
                })
            }
            p.displayName = "ExperienceItem";
            let v = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    })
                }),
                w = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    })
                }),
                f = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    })
                }),
                b = () => (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: (0, n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    })
                });

            function j() {
                let [e, t] = (0, a.useState)(null), [cat, setCat] = (0, a.useState)("all");
                let servicesList = [{
                    id: 1,
                    cat: "ai",
                    title: "AI Data Annotation & Quality Control",
                    description: "High-quality AI data labeling and annotation using tools like Shelfr for research-grade datasets, ensuring strict quality control and efficient team management.",
                    details: ["Computer Vision (Bounding boxes, Polygons, Keypoints)", "NLP Text Categorization and Named Entity Recognition", "Shelfr workflow management and team quality control", "Multi-tier accuracy auditing and verification", "Research-grade dataset structuring for model training"],
                    technologies: ["Shelfr", "AI Annotation", "Quality Control", "Python", "Research Datasets"]
                }, {
                    id: 2,
                    cat: "ai",
                    title: "AI & Machine Learning Solutions",
                    description: "AI and Machine Learning services tailored to real-world applications. From predictive analytics to NLP and computer vision, I design intelligent models that drive automation.",
                    details: ["Custom neural networks and predictive modeling", "NLP & LLM integrations with LangChain and OpenAI", "Computer vision pipelines and object classification", "End-to-end model training, validation and deployment", "Intelligent agent architectures for enterprise automation"],
                    technologies: ["TensorFlow", "PyTorch", "HuggingFace", "Python", "FastAI", "Scikit-Learn"]
                }, {
                    id: 3,
                    cat: "automation",
                    title: "Automation & Workflow Optimization",
                    description: "Developing automation scripts and tools to streamline repetitive tasks, saving time and improving efficiency with Python, APIs, and RPA custom solutions.",
                    details: ["Custom workflow bots and background task automation", "API integration between third-party SaaS services", "Data pipeline extraction, transform, and load (ETL)", "Automated file processing and report generation", "Process optimization reducing manual effort by up to 80%"],
                    technologies: ["Python", "RPA", "FastAPI", "Cron", "Bash", "Selenium"]
                }, {
                    id: 4,
                    cat: "security",
                    title: "Cybersecurity & Penetration Testing",
                    description: "Security testing services to identify vulnerabilities in web applications, networks, and systems using advanced penetration testing and audit methodologies.",
                    details: ["Web application vulnerability scanning (OWASP Top 10)", "Network penetration testing and port auditing", "API security analysis and authentication testing", "Comprehensive vulnerability assessment reports", "Hardening guidance and remediation support"],
                    technologies: ["Kali Linux", "Nmap", "Burp Suite", "Security Testing", "Linux Hardening"]
                }, {
                    id: 5,
                    cat: "ai",
                    title: "Data Visualization & Dashboard Development",
                    description: "Interactive dashboards using Python (Matplotlib, Seaborn, Plotly) and BI tools that turn complex raw metrics into clear, actionable business insights.",
                    details: ["Interactive web dashboards with visual analytics", "Statistical exploratory data analysis (EDA)", "Custom KPI tracking and executive metrics reporting", "Clean visualizations with Matplotlib, Seaborn & Plotly", "Database connectivity for automated dashboard updates"],
                    technologies: ["Pandas", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"]
                }, {
                    id: 6,
                    cat: "web",
                    title: "Graphic Design & Branding Solutions",
                    description: "Professional graphics, logos, and branding materials that reflect your unique identity, engaging your target audience with creativity and technical precision.",
                    details: ["Brand identity design and logo creation", "Social media graphics and marketing collateral", "UI visual assets and modern iconography", "Vector graphics and print-ready formats", "Adobe Photoshop and Premiere Pro media creation"],
                    technologies: ["Adobe Photoshop", "Premiere Pro", "Vector Design", "Branding Assets"]
                }, {
                    id: 7,
                    cat: "engineering",
                    title: "Architectural & Engineering Design",
                    description: "Architectural, civil, and mechanical engineering solutions using AutoCAD and Revit. Innovative layouts, floor plans, and sustainable water supply & drainage systems.",
                    details: ["2D and 3D architectural floor plans and layouts", "Drainage and water supply piping system designs", "Mechanical MEP drafting with international standards", "Revit BIM modeling and structural visualization", "Blueprint drafting and technical engineering documentation"],
                    technologies: ["AutoCAD 2D/3D", "Revit", "MEP Drafting", "Civil & Mechanical Tools"]
                }, {
                    id: 8,
                    cat: "ai",
                    title: "Python Data Analysis Services",
                    description: "Transforming raw data into actionable insights using Python tools like Pandas, NumPy, and Matplotlib. Clean, structured, and insightful data for decision-making.",
                    details: ["Data cleaning, parsing, and preprocessing", "Statistical modeling and trend identification", "Automated exploratory data analysis reports", "Advanced array computations with NumPy", "Actionable business intelligence extraction"],
                    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"]
                }, {
                    id: 9,
                    cat: "web",
                    title: "Web Development Services",
                    description: "Dynamic, responsive, and user-friendly websites using modern frameworks (React, Next.js, HTML5, CSS3, JavaScript, Node.js, and PHP) engineered for performance and SEO.",
                    details: ["Full-stack web application development", "Modern Single Page Applications (SPAs) with React", "Responsive mobile-first user interfaces", "RESTful API and database architecture", "High performance, fast load times, and SEO compliance"],
                    technologies: ["React", "Next.js", "Node.js", "JavaScript", "HTML5", "CSS3", "PHP"]
                }, {
                    id: 10,
                    cat: "web",
                    title: "SEO Optimization Services",
                    description: "Comprehensive SEO optimization including keyword research, on-page & off-page optimization, and technical SEO to improve visibility and organic search ranking.",
                    details: ["Targeted keyword research and competitor analysis", "Technical SEO audits and Core Web Vitals speed tuning", "On-page metadata, semantic tags, and schema setup", "Content optimization for search intent", "Authority building and ranking growth strategies"],
                    technologies: ["Google Analytics", "Google Search Console", "Technical SEO", "Performance Auditing"]
                }, {
                    id: 11,
                    cat: "automation",
                    title: "Comprehensive MS Office Services",
                    description: "Document preparation, advanced Excel spreadsheet analysis, automated PowerPoint presentations, and database management with efficient workflows.",
                    details: ["Advanced Excel formulas, pivot tables, and macros", "Executive PowerPoint presentation deck creation", "Professional Word formatting and documentation", "Access database structuring and reporting", "Automated office reporting templates"],
                    technologies: ["MS Excel", "MS Word", "MS PowerPoint", "MS Access", "Office Automation"]
                }, {
                    id: 12,
                    cat: "web",
                    title: "Professional Content Writing Services",
                    description: "Engaging articles, technical blogs, and web copy tailored to your audience, ensuring well-researched, accurate, and compelling writing.",
                    details: ["Technical article writing and documentation", "SEO-optimized blog posts and web copy", "Project proposals and white papers", "Engaging social and portfolio content", "Original, well-structured, and persuasive text"],
                    technologies: ["Technical Writing", "SEO Copywriting", "Content Strategy"]
                }, {
                    id: 13,
                    cat: "web",
                    title: "Professional Video Editing Services",
                    description: "Polished video editing services including seamless transitions, color correction, audio enhancement, and visual effects to create engaging media.",
                    details: ["Video cut, timeline assembly, and pacing", "Color grading and dynamic lighting adjustments", "Audio cleanup, voiceover mixing, and music sync", "Motion graphics, titles, and subtitles", "Export formats optimized for YouTube and social media"],
                    technologies: ["Adobe Premiere Pro", "Audio Enhancement", "Color Grading", "Motion Titles"]
                }];

                let filtered = cat === "all" ? servicesList : servicesList.filter(s => s.cat === cat);

                let solutions = [
                    { title: "AI & Machine Learning", sub: "Predictive AI, Agents & LLMs", desc: "Custom neural networks, LLM agents, LangChain pipelines, and high-accuracy predictive models for business automation." },
                    { title: "Full-Stack Web Development", sub: "React, Node.js & Fast APIs", desc: "Responsive web applications, modern single-page apps, and high-performance REST APIs built with React and FastAPI." },
                    { title: "Python Automation & RPA", sub: "Workflow Bots & Scripts", desc: "Custom Python bots and automation scripts to eliminate repetitive manual work, streamline tasks, and maximize efficiency." },
                    { title: "Cybersecurity & Pen-Testing", sub: "Vulnerability Testing & Audits", desc: "Penetration testing, web application security audits, vulnerability scanning, and robust network hardening defense protocols." },
                    { title: "AutoCAD 2D/3D & Revit", sub: "MEP & Architectural Plans", desc: "Precision 2D/3D architectural floor plans, drainage & water supply piping diagrams, and detailed Revit building models." },
                    { title: "Data Analytics & Dashboards", sub: "Interactive BI & Statistics", desc: "Statistical data cleaning, interactive business intelligence dashboards, and visual charts turning raw metrics into actionable insights." },
                    { title: "AI Data Annotation & QC", sub: "Shelfr Dataset Labeling & QC", desc: "Research-grade dataset labeling, bounding boxes, polygon segmentation, NLP categorization, and quality control supervision." },
                    { title: "Web Scraping & Leads", sub: "Targeted Data Mining Pipeline", desc: "Automated web scraping pipelines to collect structured leads, market intelligence, and product catalog data at scale." },
                    { title: "SEO & Performance Tuning", sub: "Google Ranking & Speed", desc: "Technical search engine optimization, Core Web Vitals speed optimization, and on-page auditing for organic Google growth." }
                ];

                return (0, n.jsxs)(s.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "w-full max-w-7xl mx-auto p-3 sm:p-6 md:p-8 space-y-10 pb-24 text-white",
                    children: [
                        (0, n.jsxs)("div", {
                            className: "text-center space-y-3",
                            children: [
                                (0, n.jsx)("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400",
                                    children: "Professional Services & Solutions"
                                }),
                                (0, n.jsx)("p", {
                                    className: "text-xs sm:text-sm md:text-base text-zinc-300 max-w-2xl mx-auto",
                                    children: "I offer a wide range of services to help you build, optimize, and scale your digital presence. From AI solutions to web development and engineering design, I have the expertise to bring your ideas to life."
                                }),
                                (0, n.jsx)("div", {
                                    className: "flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-2",
                                    children: [
                                        { id: "all", label: "All Services" },
                                        { id: "ai", label: "AI & ML" },
                                        { id: "web", label: "Web Dev" },
                                        { id: "automation", label: "Automation" },
                                        { id: "security", label: "Security" },
                                        { id: "engineering", label: "Engineering" }
                                    ].map(cItem => (0, n.jsx)("button", {
                                        onClick: () => setCat(cItem.id),
                                        className: "px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all " + (cat === cItem.id ? "bg-emerald-500 text-black font-semibold shadow" : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800"),
                                        children: cItem.label
                                    }, cItem.id))
                                })
                            ]
                        }),
                        (0, n.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
                            children: filtered.map(item => (0, n.jsxs)(s.P.div, {
                                whileHover: { scale: 1.01 },
                                className: "bg-zinc-900/60 backdrop-blur-md rounded-2xl p-5 border border-zinc-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between cursor-pointer",
                                onClick: () => t(e === item.id ? null : item.id),
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: "space-y-3",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    (0, n.jsx)("h3", {
                                                        className: "text-lg font-bold text-white",
                                                        children: item.title
                                                    }),
                                                    (0, n.jsx)("span", {
                                                        className: "text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 uppercase",
                                                        children: item.cat
                                                    })
                                                ]
                                            }),
                                            (0, n.jsx)("p", {
                                                className: "text-xs sm:text-sm text-zinc-300 leading-relaxed",
                                                children: item.description
                                            }),
                                            e === item.id && (0, n.jsxs)(s.P.div, {
                                                initial: { opacity: 0, height: 0 },
                                                animate: { opacity: 1, height: "auto" },
                                                className: "pt-2 space-y-2 border-t border-zinc-800 mt-2",
                                                children: [
                                                    (0, n.jsx)("h4", { className: "text-xs font-bold text-emerald-300 uppercase tracking-wider", children: "What I Deliver:" }),
                                                    (0, n.jsx)("ul", {
                                                        className: "space-y-1 text-xs text-zinc-300 list-disc list-inside",
                                                        children: item.details.map((d, dIdx) => (0, n.jsx)("li", { children: d }, dIdx))
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "pt-4 mt-3 border-t border-zinc-800/60 flex items-center justify-between",
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: "flex flex-wrap gap-1",
                                                children: item.technologies.slice(0, 3).map(tech => (0, n.jsx)("span", {
                                                    className: "text-[10px] bg-black/50 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800",
                                                    children: tech
                                                }, tech))
                                            }),
                                            (0, n.jsx)("span", {
                                                className: "text-xs text-emerald-400 font-medium hover:underline",
                                                children: e === item.id ? "Hide details" : "Learn more →"
                                            })
                                        ]
                                    })
                                ]
                            }, item.id))
                        }),
                        (0, n.jsxs)("div", {
                            className: "pt-8 space-y-6 border-t border-zinc-800/80",
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "text-center space-y-2",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-emerald-400",
                                            children: "Shop / Packaged Solutions"
                                        }),
                                        (0, n.jsx)("p", {
                                            className: "text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto",
                                            children: "Ready-to-deploy professional packages tailored for businesses, startups, and research teams."
                                        })
                                    ]
                                }),
                                (0, n.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                                    children: solutions.map(sol => (0, n.jsxs)("div", {
                                        className: "bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 hover:border-emerald-500/40 flex flex-col justify-between transition-all",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    (0, n.jsx)("h3", { className: "text-lg font-bold text-white", children: sol.title }),
                                                    (0, n.jsx)("div", { className: "text-xs text-emerald-400 font-mono", children: sol.sub }),
                                                    (0, n.jsx)("p", { className: "text-xs text-zinc-300 leading-relaxed pt-1", children: sol.desc })
                                                ]
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "pt-4 mt-3",
                                                children: (0, n.jsx)("a", {
                                                    href: "mailto:ghaznain1122@gmail.com?subject=Inquiry: " + encodeURIComponent(sol.title),
                                                    className: "block text-center bg-zinc-800 hover:bg-emerald-500 hover:text-black text-white text-xs font-semibold py-2 px-4 rounded-xl transition-all border border-zinc-700 hover:border-emerald-500",
                                                    children: "Order / Inquire Now"
                                                })
                                            })
                                        ]
                                    }, sol.title))
                                })
                            ]
                        })
                    ]
                })
            }

            function N() {
                let [submitted, setSubmitted] = (0, a.useState)(!1),
                    [formData, setFormData] = (0, a.useState)({ name: "", email: "", subject: "", message: "" });

                let handleSubmit = e => {
                    e.preventDefault();
                    if (!formData.name || !formData.email || !formData.message) return;
                    setSubmitted(!0);
                    let mailtoUrl = "mailto:ghaznain1122@gmail.com?subject=" + encodeURIComponent(formData.subject || "Portfolio Inquiry from " + formData.name) + "&body=" + encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message);
                    window.location.href = mailtoUrl;
                };

                return (0, n.jsxs)(s.P.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "w-full max-w-5xl mx-auto p-3 sm:p-6 md:p-8 text-white space-y-10 pb-24",
                    children: [
                        (0, n.jsxs)("header", {
                            className: "text-center space-y-2",
                            children: [
                                (0, n.jsx)("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400",
                                    children: "Let's Work Together"
                                }),
                                (0, n.jsx)("p", {
                                    className: "text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl mx-auto",
                                    children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out directly or use the message form."
                                })
                            ]
                        }),
                        (0, n.jsx)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
                            children: [
                                { label: "Location", val: "Lahore, Pakistan", icon: "📍" },
                                { label: "Email", val: "ghaznain1122@gmail.com", icon: "✉️", link: "mailto:ghaznain1122@gmail.com" },
                                { label: "Call / WhatsApp", val: "+92 329 4733140", icon: "📞", link: "tel:+923294733140" },
                                { label: "Website", val: "xer0byte.netlify.app", icon: "🌐", link: "https://xer0byte.netlify.app" }
                            ].map(item => (0, n.jsxs)("div", {
                                className: "bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 text-center flex flex-col items-center justify-center space-y-1",
                                children: [
                                    (0, n.jsx)("span", { className: "text-2xl mb-1", children: item.icon }),
                                    (0, n.jsx)("span", { className: "text-xs text-zinc-400 uppercase tracking-wider", children: item.label }),
                                    item.link ? (0, n.jsx)("a", {
                                        href: item.link,
                                        target: item.link.startsWith("http") ? "_blank" : undefined,
                                        rel: "noopener noreferrer",
                                        className: "text-xs sm:text-sm font-semibold text-emerald-400 hover:underline truncate max-w-full",
                                        children: item.val
                                    }) : (0, n.jsx)("span", {
                                        className: "text-xs sm:text-sm font-semibold text-white truncate max-w-full",
                                        children: item.val
                                    })
                                ]
                            }, item.label))
                        }),
                        (0, n.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-xl sm:text-2xl font-bold text-white",
                                            children: "Connect on Social & Professional Platforms"
                                        }),
                                        (0, n.jsx)("p", {
                                            className: "text-xs sm:text-sm text-zinc-400",
                                            children: "Follow my latest projects, GitHub repositories, and engineering updates across professional networks."
                                        }),
                                        (0, n.jsx)("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
                                            children: y.map(e => (0, n.jsxs)(s.P.a, {
                                                href: e.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: e.backgroundColor + " p-4 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform border border-white/10 shadow",
                                                whileHover: { y: -3 },
                                                children: [
                                                    (0, n.jsx)("span", { className: "text-2xl", children: e.icon }),
                                                    (0, n.jsxs)("div", {
                                                        children: [
                                                            (0, n.jsx)("h3", { className: "text-sm font-bold text-white", children: e.name }),
                                                            (0, n.jsx)("p", { className: "text-[11px] text-white/80", children: "View profile →" })
                                                        ]
                                                    })
                                                ]
                                            }, e.name))
                                        })
                                    ]
                                }),
                                (0, n.jsxs)("div", {
                                    className: "bg-zinc-900/70 p-6 rounded-2xl border border-zinc-800 space-y-4",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-xl font-bold text-white",
                                            children: "Send a Direct Message"
                                        }),
                                        submitted ? (0, n.jsxs)("div", {
                                            className: "p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-center space-y-2",
                                            children: [
                                                (0, n.jsx)("div", { className: "text-emerald-400 text-lg font-bold", children: "Thank you, " + formData.name + "!" }),
                                                (0, n.jsx)("p", { className: "text-xs text-zinc-300", children: "Your email client has opened with your inquiry. I will get back to you promptly." })
                                            ]
                                        }) : (0, n.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            className: "space-y-3",
                                            children: [
                                                (0, n.jsx)("div", {
                                                    children: (0, n.jsx)("input", {
                                                        type: "text",
                                                        required: !0,
                                                        placeholder: "Your Name",
                                                        value: formData.name,
                                                        onChange: e => setFormData({ ...formData, name: e.target.value }),
                                                        className: "w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                                                    })
                                                }),
                                                (0, n.jsx)("div", {
                                                    children: (0, n.jsx)("input", {
                                                        type: "email",
                                                        required: !0,
                                                        placeholder: "Your Email Address",
                                                        value: formData.email,
                                                        onChange: e => setFormData({ ...formData, email: e.target.value }),
                                                        className: "w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                                                    })
                                                }),
                                                (0, n.jsx)("div", {
                                                    children: (0, n.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "Subject",
                                                        value: formData.subject,
                                                        onChange: e => setFormData({ ...formData, subject: e.target.value }),
                                                        className: "w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                                                    })
                                                }),
                                                (0, n.jsx)("div", {
                                                    children: (0, n.jsx)("textarea", {
                                                        required: !0,
                                                        rows: 4,
                                                        placeholder: "Message",
                                                        value: formData.message,
                                                        onChange: e => setFormData({ ...formData, message: e.target.value }),
                                                        className: "w-full bg-black/60 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                                                    })
                                                }),
                                                (0, n.jsx)("button", {
                                                    type: "submit",
                                                    className: "w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/20 cursor-pointer",
                                                    children: "Send Message →"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, n.jsx)("footer", {
                            className: "text-center pt-8 border-t border-zinc-800/60 text-xs text-zinc-500",
                            children: "© 2026 Ghaznain Ahmad (Xer0byte). All rights reserved. Let's Build Our world our way!"
                        })
                    ]
                })
            }
            let k = () => (0, n.jsxs)("div", {
                className: "relative",
                children: [(0, n.jsx)("svg", {
                    style: {
                        position: "absolute",
                        width: 0,
                        height: 0
                    },
                    children: (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("filter", {
                            id: "neuralNoise",
                            children: [(0, n.jsx)("feTurbulence", {
                                type: "fractalNoise",
                                baseFrequency: "0.01",
                                numOctaves: "3",
                                seed: "1",
                                children: (0, n.jsx)("animate", {
                                    attributeName: "baseFrequency",
                                    dur: "5s",
                                    values: "0.01;0.005;0.01",
                                    repeatCount: "indefinite"
                                })
                            }), (0, n.jsx)("feDisplacementMap", { in: "SourceGraphic",
                                scale: "5"
                            })]
                        })
                    })
                }), (0, n.jsx)("div", {
                    className: "flex justify-center",
                    children: "Xer0byte".split("").map((e, t) => (0, n.jsx)(s.P.span, {
                        className: "text-6xl font-bold inline-block neural-text",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                        },
                        transition: {
                            duration: .5,
                            delay: .1 * t,
                            filter: {
                                duration: 2,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            }
                        },
                        children: e
                    }, t))
                })]
            });

            function M() {
                let [e, t] = (0, a.useState)(!1), [i, o] = (0, a.useState)("home");
                (0, a.useEffect)(() => {
                    t(!0)
                }, []);
                let c = t => {
                        e && ("hover" === t.type || "click" === t.type && o(t.section || "home"))
                    },
                    m = t => {
                        e && i !== t && (o(t), setTimeout(() => {
                            c({
                                type: "click",
                                section: t
                            })
                        }, 100))
                    };
                return e ? (0, n.jsxs)("div", {
                    className: "relative w-screen h-screen overflow-hidden luxury-gradient",
                    children: [(0, n.jsx)(l, {
                        activeSection: i,
                        onInteraction: c
                    }), (0, n.jsx)(r.N, {
                        mode: "wait",
                        initial: !1,
                        children: (0, n.jsxs)(s.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .3
                            },
                            className: "absolute inset-0 overflow-y-auto flex justify-center pb-20 sm:pb-24 pt-4 sm:pt-6 md:pt-10 px-2 sm:px-4 md:px-8 ".concat("home" === i ? "items-center" : "items-start", " ", "home" !== i ? "backdrop-blur-md bg-black/30" : ""),
                            children: ["home" === i && (0, n.jsxs)("div", {
                                className: "text-center text-white max-w-3xl mx-auto px-4 py-4 sm:py-6",
                                children: [
                                    (0, n.jsx)(k, {}),
                                    (0, n.jsxs)(s.P.div, {
                                        initial: { opacity: 0, y: 15 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.3, duration: 0.5 },
                                        className: "mt-4 space-y-3",
                                        children: [
                                            (0, n.jsx)("h2", {
                                                className: "text-xl sm:text-2xl md:text-4xl font-bold text-white tracking-tight",
                                                children: "Ghaznain Ahmad"
                                            }),
                                            (0, n.jsx)("p", {
                                                className: "text-xs sm:text-sm md:text-base text-emerald-400 font-mono tracking-wider uppercase font-semibold",
                                                children: "Software Developer & AI/ML Engineer • Data Annotator • AutoCAD Specialist"
                                            }),
                                            (0, n.jsx)("p", {
                                                className: "text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto",
                                                children: "I am a software developer specializing in building high-performance, user-focused web applications and AI solutions. Skilled in Python, Machine Learning, ReactJS, and an expert in Automation, AI Data Annotation, and AutoCAD."
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: "flex flex-wrap items-center justify-center gap-3 pt-3",
                                                children: [
                                                    (0, n.jsx)("button", {
                                                        onClick: () => m("hire"),
                                                        className: "bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer",
                                                        children: "Let's Talk"
                                                    }),
                                                    (0, n.jsx)("button", {
                                                        onClick: () => m("about"),
                                                        className: "bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-emerald-400 font-medium px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer",
                                                        children: "View Resume"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }), "about" === i && (0, n.jsx)(g, {}), "projects" === i && (0, n.jsx)(d, {}), "services" === i && (0, n.jsx)(j, {}), "hire" === i && (0, n.jsx)(N, {})]
                        }, i)
                    }), (0, n.jsx)("div", {
                        className: "absolute bottom-2 right-3 text-white/70 text-sm",
                        children: (0, n.jsxs)("p", {
                            children: ["by", " ", (0, n.jsx)("a", {
                                href: "https://github.com/Xer0byte",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-white transition-colors",
                                children: "Xer0byte"
                            })]
                        })
                    }), (0, n.jsx)("nav", {
                        className: "fixed bottom-3 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-[96vw]",
                        children: (0, n.jsx)("div", {
                            className: "flex gap-1.5 sm:gap-3 md:gap-4 bg-black/50 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-white/10 shadow-xl overflow-x-auto",
                            children: ["home", "about", "projects", "services", "hire"].map(e => (0, n.jsx)("button", {
                                onClick: () => m(e),
                                className: "px-4 py-2 rounded-full transition-colors ".concat(i === e ? "bg-white text-black" : "text-white"),
                                children: e.charAt(0).toUpperCase() + e.slice(1)
                            }, e))
                        })
                    })]
                }) : (0, n.jsx)("div", {
                    className: "relative w-screen h-screen overflow-hidden luxury-gradient",
                    children: (0, n.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, n.jsx)("div", {
                            className: "text-center text-white",
                            children: (0, n.jsx)(k, {})
                        })
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [450, 441, 517, 358], () => t(8972)), _N_E = e.O()
    }
]);