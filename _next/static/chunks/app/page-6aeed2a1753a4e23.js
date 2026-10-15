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
                    image: "/src/assets/images/ai_annotation_project_1791663501493.jpg",
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
                    image: "/src/assets/images/ai_chatbot_project_1791663516512.jpg",
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
                    image: "/src/assets/images/ecommerce_dashboard_1791663529586.jpg",
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
                    image: "/src/assets/images/predictive_analytics_1791663545299.jpg",
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
                    image: "/src/assets/images/architectural_cad_1791663561414.jpg",
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
                                    children: [(0, n.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                        referrerPolicy: "no-referrer",
                                        className: "w-full h-full object-cover rounded-lg"
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
                    className: "relative bg-black/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-8 max-w-4xl mx-auto max-h-[85vh] overflow-y-auto shadow-2xl text-left my-4",
                    children: [
                        (0, n.jsx)("button", {
                            onClick: i,
                            className: "absolute top-4 right-4 text-white/80 hover:text-white w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20 cursor-pointer text-sm font-bold",
                            children: "✕"
                        }),
                        (0, n.jsx)("img", {
                            src: t.image,
                            alt: t.title,
                            referrerPolicy: "no-referrer",
                            className: "w-full h-48 sm:h-72 object-cover rounded-xl mb-6 border border-white/10 shadow-lg"
                        }),
                        (0, n.jsx)("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-3 pr-10",
                            children: t.title
                        }),
                        (0, n.jsx)("p", {
                            className: "text-gray-300 text-sm sm:text-base mb-6 leading-relaxed",
                            children: t.description
                        }),
                        (0, n.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10",
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [
                                        (0, n.jsx)("h3", {
                                            className: "text-base sm:text-lg font-bold text-emerald-400",
                                            children: "Key Features"
                                        }),
                                        (0, n.jsx)("ul", {
                                            className: "space-y-2 text-xs sm:text-sm text-gray-300",
                                            children: t.details.features.map((e, t) => (0, n.jsxs)("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    (0, n.jsx)("span", { className: "text-emerald-400 font-bold", children: "•" }),
                                                    (0, n.jsx)("span", { children: e })
                                                ]
                                            }, t))
                                        })
                                    ]
                                }),
                                (0, n.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                                (0, n.jsx)("h3",
                                                {
                                                    className: "text-base sm:text-lg font-bold text-emerald-400",
                                                    children: "Impact"
                                                }),
                                                (0, n.jsx)("p", {
                                                    className: "text-gray-300 text-xs sm:text-sm leading-relaxed",
                                                    children: t.details.impact
                                                })
                                            ]
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: "flex flex-wrap items-center gap-3 pt-2",
                                            children: [
                                                (0, n.jsxs)("a", {
                                                    href: t.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 cursor-pointer",
                                                    children: ["View Project ", (0, n.jsx)("span", { children: "→" })]
                                                }),
                                                (0, n.jsx)("button", {
                                                    onClick: i,
                                                    className: "px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-colors border border-white/10 cursor-pointer",
                                                    children: "Back to Projects"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                });
            }            let h = ["AI Data Annotation", "Shelfr Software", "Quality Control", "Team Leadership", "Python", "C++", "AI", "HTML", "CSS", "JS", "Node.js", "Computer Engineering", "Problem Solving", "Web Development", " SEO(Expert)", "AutoCAD", "Revit", "Database Management"],
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
                let [activeIdx, setActiveIdx] = (0, a.useState)(0);
                let sections = (0, a.useMemo)(() => ["intro", "experience", "skills", "education", "certifications"], []);

                let scrollToSection = idx => {
                    setActiveIdx(idx);
                    let el = document.getElementById(sections[idx]);
                    el && el.scrollIntoView({ behavior: "smooth", block: "start" });
                };

                let skillsData = [
                    "Python", "Machine Learning / AI", "Deep Learning (TensorFlow, PyTorch)",
                    "AI Data Annotation (Shelfr, QC)", "Web Development (React, Next.js)",
                    "JavaScript / TypeScript", "HTML5 & CSS3", "FastAPI / Node.js",
                    "PostgreSQL / MongoDB / SQL", "Automation & Web Scraping", "AutoCAD 2D/3D",
                    "Revit & MEP Drafting", "C++", "SEO (Expert)", "Git & GitHub", "Cloud & Docker"
                ];

                let interestsData = [
                    "Programming", "AI/ML", "Data Annotation", "Tech Research", "Security Testing",
                    "Problem Solving", "Design Thinking", "Networking", "Arts", "Music & Singing",
                    "Gaming", "Traveling", "Marketing"
                ];

                return (0, n.jsxs)("div", {
                    className: "w-full text-white relative pb-36 max-w-4xl mx-auto px-4 sm:px-8 md:px-12",
                    children: [
                        // SECTION 1: INTRO
                        (0, n.jsx)(s.P.section, {
                            id: "intro",
                            className: "py-8 sm:py-16 px-1 sm:px-3 scroll-mt-20",
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1 },
                            exit: { opacity: 0 },
                            children: (0, n.jsxs)("div", {
                                className: "space-y-6 sm:space-y-8 text-left",
                                children: [
                                    (0, n.jsxs)("div", {
                                        children: [
                                            (0, n.jsx)(s.P.h1, {
                                                className: "text-3xl sm:text-5xl md:text-6xl font-extrabold text-emerald-400 mb-3 tracking-tight font-sans",
                                                initial: { y: 20 },
                                                animate: { y: 0 },
                                                children: "GHAZNAIN AHMAD"
                                            }),
                                            (0, n.jsx)("p", {
                                                className: "text-xs sm:text-sm md:text-base text-emerald-400/90 font-mono font-medium mb-4 sm:mb-6",
                                                children: "AI/ML Engineer • Data Annotator • Web & Automation Developer • Founder of Xer0byte"
                                            }),
                                            (0, n.jsx)("p", {
                                                className: "text-base sm:text-xl md:text-2xl text-zinc-300 leading-relaxed font-normal",
                                                children: "Dynamic Tech Specialist with expertise in Python Data Analysis, Full-Stack Web Development, and Generative AI. Proficient in AutoCAD (Mechanical & Architectural), AI Data Annotation, SEO Optimization, and Automation. Adept at designing scalable web applications, data-driven insights, and intelligent systems to drive efficiency and innovation."
                                            })
                                        ]
                                    }),

                                    // Personal details cards
                                    (0, n.jsx)("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2",
                                        children: [
                                            { label: "Birthday", val: "31 OCT 2005" },
                                            { label: "Age", val: "21" },
                                            { label: "Degree", val: "Bachelor (BSCS)" },
                                            { label: "City", val: "Lahore, Pakistan" },
                                            { label: "Email", val: "ghaznain1122@gmail.com" },
                                            { label: "Phone", val: "+92 329 4733140" },
                                            { label: "Freelance", val: "Available" },
                                            { label: "Website", val: "xer0byte.netlify.app" }
                                        ].map(item => (0, n.jsxs)("div", {
                                            className: "bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 text-left space-y-1 shadow-sm",
                                            children: [
                                                (0, n.jsx)("span", { className: "text-zinc-500 text-[10px] uppercase font-bold tracking-wider", children: item.label }),
                                                (0, n.jsx)("div", { className: "text-white text-xs sm:text-sm font-semibold truncate", children: item.val })
                                            ]
                                        }, item.label))
                                    }),

                                    // Stats Counters
                                    (0, n.jsx)("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2",
                                        children: [
                                            { num: "302+", label: "Happy Clients" },
                                            { num: "211+", label: "Projects Completed" },
                                            { num: "1,463+", label: "Hours Of Support" },
                                            { num: "24+", label: "Awards & Honors" }
                                        ].map(st => (0, n.jsxs)("div", {
                                            className: "bg-zinc-900/50 rounded-xl p-4 sm:p-5 text-center border border-zinc-800/80 hover:border-emerald-500/30 transition-all",
                                            children: [
                                                (0, n.jsx)("div", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-400 font-mono", children: st.num }),
                                                (0, n.jsx)("div", { className: "text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-1 font-medium", children: st.label })
                                            ]
                                        }, st.label))
                                    })
                                ]
                            })
                        }),

                        // SECTION 2: EXPERIENCE
                        (0, n.jsx)("section", {
                            id: "experience",
                            className: "py-12 sm:py-16 px-1 sm:px-3 scroll-mt-20 border-t border-zinc-800/60",
                            children: (0, n.jsxs)("div", {
                                className: "space-y-6 sm:space-y-8",
                                children: [
                                    (0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-6",
                                        children: "Work Experience"
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "grid gap-5 sm:gap-6",
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
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "bg-zinc-900/40 p-5 rounded-xl border border-zinc-800 text-center text-zinc-300 text-xs sm:text-sm leading-relaxed",
                                                children: "Additionally, I have been working as a freelance developer since last year, building a strong portfolio and maintaining excellent client relationships across various projects."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),

                        // SECTION 3: SKILLS
                        (0, n.jsx)("section", {
                            id: "skills",
                            className: "py-12 sm:py-16 px-1 sm:px-3 scroll-mt-20 border-t border-zinc-800/60",
                            children: (0, n.jsxs)("div", {
                                className: "space-y-6 sm:space-y-8",
                                children: [
                                    (0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-6",
                                        children: "Skills"
                                    }),
                                    (0, n.jsx)(s.P.div, {
                                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4",
                                        initial: { opacity: 0 },
                                        whileInView: { opacity: 1 },
                                        transition: { staggerChildren: .1 },
                                        children: skillsData.map(e => (0, n.jsx)(s.P.div, {
                                            initial: { opacity: 0, scale: .95 },
                                            whileInView: { opacity: 1, scale: 1 },
                                            whileHover: { scale: 1.03 },
                                            className: "bg-zinc-900/50 hover:bg-zinc-800/60 rounded-xl p-3 sm:p-4 text-center border border-zinc-800/60 hover:border-emerald-500/40 transition-all cursor-default shadow-sm",
                                            children: (0, n.jsx)("span", {
                                                className: "text-emerald-400 font-medium text-xs sm:text-sm break-words",
                                                children: e
                                            })
                                        }, e))
                                    }),

                                    (0, n.jsxs)("div", {
                                        className: "pt-6 space-y-3 sm:space-y-4 text-left",
                                        children: [
                                            (0, n.jsx)("h3", {
                                                className: "text-lg sm:text-xl font-bold text-zinc-200",
                                                children: "Areas of Interest & Research"
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "flex flex-wrap gap-2 sm:gap-2.5",
                                                children: interestsData.map(it => (0, n.jsx)("span", {
                                                    className: "bg-zinc-900/80 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-full hover:border-emerald-400 transition-colors",
                                                    children: it
                                                }, it))
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),

                        // SECTION 4: EDUCATION
                        (0, n.jsx)("section", {
                            id: "education",
                            className: "py-12 sm:py-16 px-1 sm:px-3 scroll-mt-20 border-t border-zinc-800/60",
                            children: (0, n.jsxs)("div", {
                                className: "space-y-6 sm:space-y-8",
                                children: [
                                    (0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-6",
                                        children: "Education"
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "space-y-6 sm:space-y-8 pl-1 sm:pl-2",
                                        children: [
                                            (0, n.jsx)(x, {
                                                title: "Bachelor's of Computer Science (BSCS)",
                                                institution: "NCBA&E (National College of Business Administration & Economics), Lahore",
                                                period: "2024 – 2028",
                                                details: "Computer Science | Full-Stack Development & AI, Software Development with Intelligent Systems, TensorFlow & Model Training",
                                                coursework: "4-year comprehensive degree program equipping with core computer science, algorithmics, and AI solutions."
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "Intermediate in Computer Science (ICS)",
                                                institution: "GC University (GCU), Lahore",
                                                period: "2023 – 2024",
                                                details: "Built solid foundation in analytical thinking, mathematics, physics, and computer science fundamentals.",
                                                coursework: "Relevant Coursework: Web Development Techniques, Programming in C++ & Python (Basics), Object-Oriented Programming"
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "Matriculation with Computer Science",
                                                institution: "Allied School, Saddar Campus, Lahore",
                                                period: "2022 – 2023",
                                                details: "Early exposure to computing principles, hardware, and algorithms.",
                                                coursework: "Foundations of Computer Hardware, Software, Programming Fundamentals, Mathematics"
                                            }),
                                            (0, n.jsx)(x, {
                                                title: "AutoCAD with Revit Professional",
                                                institution: "NAVTTC (National Vocational and Technical Training Commission)",
                                                period: "2023 – 2024",
                                                details: "2D & 3D Drafting (Civil & Mechanical), Drainage & Water Supply System Designs, Structural & Architectural Drawings.",
                                                coursework: "Hands-on Technical Blueprint Reading, CAD Modeling, and Construction Drawings Compliance"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),

                        // SECTION 5: CERTIFICATIONS
                        (0, n.jsx)("section", {
                            id: "certifications",
                            className: "py-12 sm:py-16 px-1 sm:px-3 scroll-mt-20 border-t border-zinc-800/60",
                            children: (0, n.jsxs)("div", {
                                className: "space-y-6 sm:space-y-8",
                                children: [
                                    (0, n.jsx)("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-6",
                                        children: "Certifications"
                                    }),
                                    (0, n.jsx)(s.P.div, {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                                        initial: { opacity: 0 },
                                        whileInView: { opacity: 1 },
                                        transition: { staggerChildren: .2 },
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
                                    }),
                                    (0, n.jsx)("div", {
                                        className: "bg-zinc-900/40 p-4 rounded-xl border border-zinc-800 text-center text-zinc-400 text-xs sm:text-sm",
                                        children: "+ 18 more professional certifications in various technical domains"
                                    })
                                ]
                            })
                        })
                    ]
                });
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
                let [e, t] = (0, a.useState)(null);
                let servicesList = [{
                    id: 1,
                    title: "AI Data Annotation & Quality Control",
                    description: "High-quality AI data labeling and annotation using tools like Shelfr for research-grade datasets, ensuring strict quality control and efficient team management.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        })
                    }),
                    details: [
                        "Computer Vision (Bounding boxes, Polygons, Keypoints)",
                        "NLP Text Categorization and Named Entity Recognition",
                        "Shelfr workflow management and team quality control",
                        "Multi-tier accuracy auditing and verification",
                        "Research-grade dataset structuring for model training"
                    ],
                    technologies: ["Shelfr", "AI Annotation", "Quality Control", "Python", "Research Datasets"]
                }, {
                    id: 2,
                    title: "AI & Machine Learning Solutions",
                    description: "AI and Machine Learning services tailored to real-world applications. From predictive analytics to NLP and computer vision, I design intelligent models that drive automation.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                        })
                    }),
                    details: [
                        "Custom neural networks and predictive modeling",
                        "NLP & LLM integrations with LangChain and OpenAI",
                        "Computer vision pipelines and object classification",
                        "End-to-end model training, validation and deployment",
                        "Intelligent agent architectures for enterprise automation"
                    ],
                    technologies: ["TensorFlow", "PyTorch", "HuggingFace", "Python", "FastAI", "Scikit-Learn"]
                }, {
                    id: 3,
                    title: "Automation & Workflow Optimization",
                    description: "Developing automation scripts and tools to streamline repetitive tasks, saving time and improving efficiency with Python, APIs, and RPA custom solutions.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        })
                    }),
                    details: [
                        "Custom workflow bots and background task automation",
                        "API integration between third-party SaaS services",
                        "Data pipeline extraction, transform, and load (ETL)",
                        "Automated file processing and report generation",
                        "Process optimization reducing manual effort by up to 80%"
                    ],
                    technologies: ["Python", "RPA", "FastAPI", "Cron", "Bash", "Selenium"]
                }, {
                    id: 4,
                    title: "Cybersecurity & Penetration Testing",
                    description: "Security testing services to identify vulnerabilities in web applications, networks, and systems using advanced penetration testing and audit methodologies.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        })
                    }),
                    details: [
                        "Web application vulnerability scanning (OWASP Top 10)",
                        "Network penetration testing and port auditing",
                        "API security analysis and authentication testing",
                        "Comprehensive vulnerability assessment reports",
                        "Hardening guidance and remediation support"
                    ],
                    technologies: ["Kali Linux", "Nmap", "Burp Suite", "Security Testing", "Linux Hardening"]
                }, {
                    id: 5,
                    title: "Data Visualization & Dashboard Development",
                    description: "Interactive dashboards using Python (Matplotlib, Seaborn, Plotly) and BI tools that turn complex raw metrics into clear, actionable business insights.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                        })
                    }),
                    details: [
                        "Interactive web dashboards with visual analytics",
                        "Statistical exploratory data analysis (EDA)",
                        "Custom KPI tracking and executive metrics reporting",
                        "Clean visualizations with Matplotlib, Seaborn & Plotly",
                        "Database connectivity for automated dashboard updates"
                    ],
                    technologies: ["Pandas", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"]
                }, {
                    id: 6,
                    title: "Graphic Design & Branding Solutions",
                    description: "Professional graphics, logos, and branding materials that reflect your unique identity, engaging your target audience with creativity and technical precision.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        })
                    }),
                    details: [
                        "Brand identity design and logo creation",
                        "Social media graphics and marketing collateral",
                        "UI visual assets and modern iconography",
                        "Vector graphics and print-ready formats",
                        "Adobe Photoshop and Premiere Pro media creation"
                    ],
                    technologies: ["Adobe Photoshop", "Premiere Pro", "Vector Design", "Branding Assets"]
                }, {
                    id: 7,
                    title: "Architectural & Engineering Design Solutions",
                    description: "Providing innovative architectural, civil, and mechanical engineering solutions using AutoCAD and Revit. Precise floor plans, water supply and drainage systems.",
                    icon: (0, n.jsx)("svg", {
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
                    details: [
                        "2D and 3D architectural floor plans and layouts",
                        "Drainage and water supply piping system designs",
                        "Mechanical MEP drafting with international standards",
                        "Revit BIM modeling and structural visualization",
                        "Blueprint drafting and technical engineering documentation"
                    ],
                    technologies: ["AutoCAD 2D/3D", "Revit", "MEP Drafting", "Civil & Mechanical Tools"]
                }, {
                    id: 8,
                    title: "Python Data Analysis Services",
                    description: "Transforming raw data into actionable insights using Python tools like Pandas, NumPy, and Matplotlib. Clean, structured, and insightful data for decision-making.",
                    icon: (0, n.jsx)("svg", {
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
                    details: [
                        "Data cleaning, parsing, and preprocessing",
                        "Statistical modeling and trend identification",
                        "Automated exploratory data analysis reports",
                        "Advanced array computations with NumPy",
                        "Actionable business intelligence extraction"
                    ],
                    technologies: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"]
                }, {
                    id: 9,
                    title: "Web Development Services",
                    description: "Creating dynamic, responsive, and user-friendly websites using modern frameworks (React, Next.js, HTML5, CSS3, JavaScript, Node.js, and PHP) engineered for performance and SEO.",
                    icon: (0, n.jsx)("svg", {
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
                    details: [
                        "Full-stack web application development",
                        "Modern Single Page Applications (SPAs) with React",
                        "Responsive mobile-first user interfaces",
                        "RESTful API and database architecture",
                        "High performance, fast load times, and SEO compliance"
                    ],
                    technologies: ["React", "Next.js", "Node.js", "JavaScript", "HTML5", "CSS3", "PHP"]
                }, {
                    id: 10,
                    title: "SEO Optimization Services",
                    description: "Providing comprehensive SEO optimization services, including keyword research, on-page & off-page optimization, and technical SEO to improve search engine rankings.",
                    icon: (0, n.jsx)("svg", {
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
                    }),
                    details: [
                        "Targeted keyword research and competitor analysis",
                        "Technical SEO audits and Core Web Vitals speed tuning",
                        "On-page metadata, semantic tags, and schema setup",
                        "Content optimization for search intent",
                        "Authority building and ranking growth strategies"
                    ],
                    technologies: ["Google Analytics", "Google Search Console", "Technical SEO", "Performance Auditing"]
                }, {
                    id: 11,
                    title: "Comprehensive MS Office Services",
                    description: "Document preparation, advanced Excel spreadsheet analysis, automated PowerPoint presentations, and database management with efficient workflows.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        })
                    }),
                    details: [
                        "Advanced Excel formulas, pivot tables, and macros",
                        "Executive PowerPoint presentation deck creation",
                        "Professional Word formatting and documentation",
                        "Access database structuring and reporting",
                        "Automated office reporting templates"
                    ],
                    technologies: ["MS Excel", "MS Word", "MS PowerPoint", "MS Access", "Office Automation"]
                }, {
                    id: 12,
                    title: "Professional Content Writing Services",
                    description: "Engaging articles, technical blogs, and web copy tailored to your audience, ensuring well-researched, accurate, and compelling writing.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        })
                    }),
                    details: [
                        "Technical article writing and documentation",
                        "SEO-optimized blog posts and web copy",
                        "Project proposals and white papers",
                        "Engaging social and portfolio content",
                        "Original, well-structured, and persuasive text"
                    ],
                    technologies: ["Technical Writing", "SEO Copywriting", "Content Strategy"]
                }, {
                    id: 13,
                    title: "Professional Video Editing Services",
                    description: "Polished video editing services including seamless transitions, color correction, audio enhancement, and visual effects to create engaging media.",
                    icon: (0, n.jsx)("svg", {
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
                            d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        })
                    }),
                    details: [
                        "Video cut, timeline assembly, and pacing",
                        "Color grading and dynamic lighting adjustments",
                        "Audio cleanup, voiceover mixing, and music sync",
                        "Motion graphics, titles, and subtitles",
                        "Export formats optimized for YouTube and social media"
                    ],
                    technologies: ["Adobe Premiere Pro", "Audio Enhancement", "Color Grading", "Motion Titles"]
                }];

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
                    className: "w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-b from-black/5 to-black/10 pb-36 space-y-12 sm:space-y-16",
                    children: [
                        (0, n.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: servicesList.map(i => (0, n.jsxs)(s.P.div, {
                                whileHover: {
                                    scale: 1.02,
                                    transition: { duration: .3 }
                                },
                                className: "\n              relative overflow-hidden\n              ".concat(e === i.id ? "md:col-span-2" : "", "\n              bg-gradient-to-br from-white/10 via-white/5 to-transparent\n              backdrop-blur-xl rounded-3xl p-6 sm:p-8\n              border border-white/20 hover:border-white/40\n              cursor-pointer\n              shadow-[0_8px_30px_rgb(255,255,255,0.1)]\n              hover:shadow-[0_8px_40px_rgb(255,255,255,0.2)]\n              transition-all duration-500\n            "),
                                onClick: () => t(e === i.id ? null : i.id),
                                children: [
                                    (0, n.jsx)("div", {
                                        className: "absolute top-4 right-4",
                                        children: (0, n.jsx)("span", {
                                            className: "text-white/60 text-sm flex items-center gap-2",
                                            children: e === i.id ? (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Close details"
                                                }), (0, n.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [(0, n.jsx)("line", {
                                                        x1: "18",
                                                        y1: "6",
                                                        x2: "6",
                                                        y2: "18"
                                                    }), (0, n.jsx)("line", {
                                                        x1: "6",
                                                        y1: "6",
                                                        x2: "18",
                                                        y2: "18"
                                                    })]
                                                })]
                                            }) : (0, n.jsxs)(n.Fragment, {
                                                children: [(0, n.jsx)("span", {
                                                    children: "Click for details"
                                                }), (0, n.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [(0, n.jsx)("line", {
                                                        x1: "12",
                                                        y1: "5",
                                                        x2: "12",
                                                        y2: "19"
                                                    }), (0, n.jsx)("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    })]
                                                })]
                                            })
                                        })
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: "flex items-start gap-4 sm:gap-6",
                                        children: [
                                            (0, n.jsx)("div", {
                                                className: "text-white hover:text-white/90 transition-colors shrink-0",
                                                children: i.icon
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: "flex-1 pr-12 sm:pr-20",
                                                children: [
                                                    (0, n.jsx)("h3", {
                                                        className: "text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight",
                                                        children: i.title
                                                    }),
                                                    (0, n.jsx)("p", {
                                                        className: "text-white/80 text-sm sm:text-base leading-relaxed",
                                                        children: i.description
                                                    }),
                                                    (0, n.jsx)("a", {
                                                        href: "mailto:ghaznain1122@gmail.com?subject=Inquiry: " + encodeURIComponent(i.title),
                                                        onClick: ev => ev.stopPropagation(),
                                                        className: "inline-block mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs sm:text-sm text-white/90 border border-white/20 transition-all duration-300",
                                                        children: "Get in Touch"
                                                    }),
                                                    e === i.id && (0, n.jsx)(s.P.div, {
                                                        initial: { opacity: 0, height: 0 },
                                                        animate: { opacity: 1, height: "auto" },
                                                        transition: { duration: .3 },
                                                        className: "mt-6",
                                                        children: (0, n.jsxs)("div", {
                                                            className: "grid md:grid-cols-2 gap-6",
                                                            children: [
                                                                (0, n.jsxs)("div", {
                                                                    children: [
                                                                        (0, n.jsx)("h4", {
                                                                            className: "text-white/90 font-semibold mb-3 text-base sm:text-lg",
                                                                            children: "Capabilities"
                                                                        }),
                                                                        (0, n.jsx)("ul", {
                                                                            className: "list-disc list-inside text-white/80 space-y-2 text-xs sm:text-sm leading-relaxed",
                                                                            children: i.details.map((e, t) => (0, n.jsx)("li", {
                                                                                className: "hover:text-white transition-colors",
                                                                                children: e
                                                                            }, t))
                                                                        })
                                                                    ]
                                                                }),
                                                                (0, n.jsxs)("div", {
                                                                    children: [
                                                                        (0, n.jsx)("h4", {
                                                                            className: "text-white/90 font-semibold mb-3 text-base sm:text-lg",
                                                                            children: "Technologies"
                                                                        }),
                                                                        (0, n.jsx)("div", {
                                                                            className: "flex flex-wrap gap-2",
                                                                            children: i.technologies.map((e, t) => (0, n.jsx)("span", {
                                                                                className: "px-3.5 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-xs sm:text-sm text-white/90 border border-white/10 transition-colors duration-300 font-mono",
                                                                                children: e
                                                                            }, t))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, i.id))
                        }),

                        (0, n.jsxs)("div", {
                            className: "pt-8 space-y-6 border-t border-white/10",
                            children: [
                                (0, n.jsxs)("div", {
                                    className: "text-center space-y-2",
                                    children: [
                                        (0, n.jsx)("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-white",
                                            children: "Shop / Packaged Solutions"
                                        }),
                                        (0, n.jsx)("p", {
                                            className: "text-xs sm:text-sm text-white/70 max-w-xl mx-auto",
                                            children: "Ready-to-deploy professional packages tailored for businesses, startups, and research teams."
                                        })
                                    ]
                                }),
                                (0, n.jsx)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: solutions.map(sol => (0, n.jsxs)(s.P.div, {
                                        whileHover: { scale: 1.02, transition: { duration: .3 } },
                                        className: "bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 flex flex-col justify-between transition-all shadow-[0_8px_30px_rgb(255,255,255,0.05)]",
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    (0, n.jsx)("h3", { className: "text-lg font-bold text-white", children: sol.title }),
                                                    (0, n.jsx)("div", { className: "text-xs text-emerald-400 font-mono font-medium", children: sol.sub }),
                                                    (0, n.jsx)("p", { className: "text-xs text-white/80 leading-relaxed pt-1", children: sol.desc })
                                                ]
                                            }),
                                            (0, n.jsx)("div", {
                                                className: "pt-4 mt-3 border-t border-white/10",
                                                children: (0, n.jsx)("a", {
                                                    href: "mailto:ghaznain1122@gmail.com?subject=Inquiry: " + encodeURIComponent(sol.title),
                                                    className: "block text-center bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-4 rounded-full transition-all border border-white/20",
                                                    children: "Order / Inquire Now"
                                                })
                                            })
                                        ]
                                    }, sol.title))
                                })
                            ]
                        })
                    ]
                });
            }
            let y = [{
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ghaznain-ahmad/",
                icon: (0, n.jsx)("svg", {
                    className: "w-8 h-8",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    })
                }),
                backgroundColor: "bg-[#0077B5]"
            }, {
                name: "GitHub",
                url: "https://github.com/Xer0byte",
                icon: (0, n.jsx)("svg", {
                    className: "w-8 h-8",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                    })
                }),
                backgroundColor: "bg-[#333]"
            }, {
                name: "Upwork",
                url: "https://www.upwork.com/freelancers/~01f1d12759171916f1",
                icon: (0, n.jsx)("svg", {
                    className: "w-8 h-8",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295s5.281-2.378 5.281-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"
                    })
                }),
                backgroundColor: "bg-[#6FDA44]"
            }, {
                name: "Email",
                url: "mailto:ghaznain1122@gmail.com",
                icon: (0, n.jsx)("svg", {
                    className: "w-8 h-8",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M12 12.713l11.985-7.99A1.5 1.5 0 0022.5 3h-21a1.5 1.5 0 00-1.485 1.723L12 12.713zM12 14.287L.015 6.297A1.5 1.5 0 000 7.5v9a1.5 1.5 0 001.5 1.5h21a1.5 1.5 0 001.5-1.5v-9a1.5 1.5 0 00-.015-.203L12 14.287z"
                    })
                }),
                backgroundColor: "bg-[#EA4335]"
            }];

            function N() {
                return (0, n.jsx)(s.P.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 text-white pb-32",
                    children: (0, n.jsxs)("div", {
                        className: "space-y-8",
                        children: [(0, n.jsxs)("header", {
                            className: "text-center mb-8 md:mb-12",
                            children: [(0, n.jsx)("h1", {
                                className: "text-3xl sm:text-4xl font-bold mb-4",
                                children: "Let's Work Together"
                            }), (0, n.jsx)("p", {
                                className: "text-gray-300 text-base sm:text-lg",
                                children: "Connect with me on various platforms or hire me for your next project"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                            children: y.map(e => (0, n.jsxs)(s.P.a, {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "".concat(e.backgroundColor, " p-6 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform"),
                                whileHover: {
                                    y: -5
                                },
                                children: [(0, n.jsx)("span", {
                                    className: "text-4xl",
                                    children: e.icon
                                }), (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-xl font-bold",
                                        children: e.name
                                    }), (0, n.jsxs)("p", {
                                        className: "text-sm text-white/80",
                                        children: ["Connect on ", e.name]
                                    })]
                                })]
                            }, e.name))
                        }), (0, n.jsxs)("div", {
                            className: "mt-8 md:mt-12 text-center",
                            children: [(0, n.jsx)("p", {
                                className: "text-gray-300 mb-4",
                                children: "Looking for a dedicated developer for your project?"
                            }), (0, n.jsx)(s.P.a, {
                                href: "mailto:ghaznain1122@gmail.com",
                                className: "inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-colors",
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                children: "Get in Touch"
                            })]
                        })]
                    })
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
                    children: [
                        (0, n.jsx)(l, {
                            activeSection: i,
                            onInteraction: c
                        }),
                        (0, n.jsx)(r.N, {
                            mode: "wait",
                            initial: !1,
                            children: (0, n.jsxs)(s.P.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: .3 },
                                className: "absolute inset-0 overflow-y-auto flex justify-center px-2 sm:px-4 md:px-8 pt-4 sm:pt-6 md:pt-10 pb-24 sm:pb-32 " + ("home" === i ? "items-center" : "items-start") + " " + ("home" !== i ? "backdrop-blur-md bg-black/30" : ""),
                                children: [
                                    "home" === i && (0, n.jsxs)("div", {
                                        className: "text-center text-white max-w-3xl mx-auto px-4 py-4 sm:py-8 my-auto relative z-10 space-y-3 sm:space-y-4",
                                        children: [
                                            (0, n.jsx)(k, {}),
                                            (0, n.jsxs)(s.P.div, {
                                                initial: { opacity: 0, y: 15 },
                                                animate: { opacity: 1, y: 0 },
                                                transition: { delay: 0.3, duration: 0.5 },
                                                className: "space-y-3",
                                                children: [
                                                    (0, n.jsx)("h2", {
                                                        className: "text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",
                                                        children: "Ghaznain Ahmad"
                                                    }),
                                                    (0, n.jsx)("p", {
                                                        className: "text-xs sm:text-sm md:text-base text-emerald-400 font-mono tracking-wider uppercase font-semibold",
                                                        children: "Software Developer & AI/ML Engineer • Data Annotator • AutoCAD Specialist"
                                                    }),
                                                    (0, n.jsx)("p", {
                                                        className: "text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto pt-1",
                                                        children: "I am a software developer specializing in building high-performance, user-focused web applications and AI solutions. Skilled in Python, Machine Learning, ReactJS, and an expert in Automation, AI Data Annotation, and AutoCAD."
                                                    }),
                                                    (0, n.jsxs)("div", {
                                                        className: "flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4",
                                                        children: [
                                                            (0, n.jsxs)(s.P.button, {
                                                                whileHover: { scale: 1.05 },
                                                                whileTap: { scale: 0.95 },
                                                                onClick: () => m("hire"),
                                                                className: "px-6 py-2.5 rounded-full transition-colors bg-white text-black font-semibold text-xs sm:text-sm cursor-pointer shadow-lg flex items-center gap-2",
                                                                style: { backgroundColor: "#ffffff", color: "#000000" },
                                                                children: [
                                                                    (0, n.jsx)("span", { children: "Let's Talk" }),
                                                                    (0, n.jsxs)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "15",
                                                                        height: "15",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2.5",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: [
                                                                            (0, n.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                                                                            (0, n.jsx)("polyline", { points: "12 5 19 12 12 19" })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            (0, n.jsxs)(s.P.button, {
                                                                whileHover: { scale: 1.05 },
                                                                whileTap: { scale: 0.95 },
                                                                onClick: () => m("about"),
                                                                className: "px-6 py-2.5 rounded-full transition-colors backdrop-blur-sm text-white font-semibold text-xs sm:text-sm cursor-pointer flex items-center gap-2",
                                                                style: { backgroundColor: "rgba(0, 0, 0, 0.4)", border: "1px solid rgba(255, 255, 255, 0.25)" },
                                                                children: [
                                                                    (0, n.jsxs)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "15",
                                                                        height: "15",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        className: "text-emerald-400",
                                                                        children: [
                                                                            (0, n.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                                                                            (0, n.jsx)("polyline", { points: "14 2 14 8 20 8" }),
                                                                            (0, n.jsx)("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                                                                            (0, n.jsx)("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                                                                            (0, n.jsx)("polyline", { points: "10 9 9 9 8 9" })
                                                                        ]
                                                                    }),
                                                                    (0, n.jsx)("span", { children: "View Resume" })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    "about" === i && (0, n.jsx)(g, {}),
                                    "projects" === i && (0, n.jsx)(d, {}),
                                    "services" === i && (0, n.jsx)(j, {}),
                                    "hire" === i && (0, n.jsx)(N, {})
                                ]
                            }, i)
                        }),
                        (0, n.jsx)("div", {
                            className: "absolute bottom-2 right-3 text-white/70 text-sm z-40 select-none", style: { position: "absolute", bottom: "12px", right: "16px", zIndex: 40 },
                            children: (0, n.jsxs)("p", {
                                children: [
                                    "by",
                                    " ",
                                    (0, n.jsx)("a", {
                                        href: "https://github.com/Xer0byte",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-white transition-colors",
                                        children: "Xer0byte"
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)("nav", {
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                        children: (0, n.jsx)("div", {
                            className: "flex gap-4 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full",
                            children: ["home", "about", "projects", "services", "hire"].map(e => (0, n.jsx)("button", {
                                onClick: () => m(e),
                                className: "px-4 py-2 rounded-full transition-colors ".concat(i === e ? "bg-white text-black" : "text-white"),
                                children: e.charAt(0).toUpperCase() + e.slice(1)
                            }, e))
                        })
                    })
                    ]
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