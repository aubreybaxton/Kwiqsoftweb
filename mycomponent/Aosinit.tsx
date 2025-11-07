"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSinit = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            offset: 100,
            duration: 1000,
            easing: "ease",
        });
    }, []);

    return null;
};

export default AOSinit;