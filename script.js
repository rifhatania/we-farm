// Handle Landing Page
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login").addEventListener("click", function () {
        window.location.href = "login.html";
    });

    document.querySelector(".register").addEventListener("click", function () {
        window.location.href = "signup.html";
    });
});


// Handle Login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const phone = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (phone && password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "home.html";
    } else {
        alert("Masukkan username dan password!");
    }
});

function togglePassword() {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Handle Sign Up
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    if (!form) return;

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        submitBtn.textContent = "Loading...";

        // Get form values
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Validation
        if (!validateForm(name, phone, email, password, confirmPassword)) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Sign Up";
            return;
        }

        // Simulate API call (replace with actual fetch())
        setTimeout(() => {
            alert("Sign up successful! Redirecting to login...");
            form.reset();
            window.location.href = "login.html";
        }, 1000);
    });
});

// Toggle password visibility (optimized)
function togglePassword(inputId, element) {
    const input = document.getElementById(inputId);
    const icon = element.querySelector("i");
    input.type = input.type === "password" ? "text" : "password";
    icon.setAttribute("data-feather", input.type === "password" ? "eye" : "eye-off");
    feather.replace();
}

// Validate all fields
function validateForm(name, phone, email, password, confirmPassword) {
    // Check empty fields
    if (!name || !phone || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format!");
        return false;
    }

    // Phone validation (min 10 digits)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must be at least 10 digits!");
        return false;
    }

    // Password strength (min 8 chars, 1 uppercase, 1 number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be 8+ chars with 1 uppercase letter and 1 number!");
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}


// Handle Home
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const plantCards = document.querySelectorAll(".plant-card");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        plantCards.forEach(card => {
            const plantName = card.querySelector("p").textContent.toLowerCase();
            card.style.display = plantName.includes(query) ? "block" : "none";
        });
    });
});

// Handle Drawer Home
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const drawer = document.getElementById("drawer");
    const closeDrawer = document.getElementById("closeDrawer");

    menuIcon.addEventListener("click", function () {
        drawer.classList.add("open");
    });

    closeDrawer.addEventListener("click", function () {
        drawer.classList.remove("open");
    });

    window.addEventListener("click", function (e) {
        if (!drawer.contains(e.target) && !menuIcon.contains(e.target)) {
            drawer.classList.remove("open");
        }
    });
});


// Handle Guide dan Track
document.addEventListener("DOMContentLoaded", function () {
    const plantCards = document.querySelectorAll(".plant-card");
    const guideModal = document.createElement("div");
    guideModal.classList.add("guide-modal");
    document.body.appendChild(guideModal);

    const plantGuides = {
        "Cabai Rawit": {
            steps: [
                "Siapkan pot yang memiliki lubang drainase. Isi pot dengan media tanam sampai menyisakan 5-10 cm dari bibir pot.",
                "Sebarkan biji cabai rawit dengan jarak 5-10 cm diatas media tanam.",
                "Siram bibit cabai dengan semprotan tanaman 2 kali sehari (pagi dan sore).",
                "Bibit cabai bisa dipindahkan ke lahan ketika sudah tumbuh 5-6 helai daun (30-35 hari)."
            ],
            products: ["Pot Tanaman", "Kompos Organik", "Bibit Cabai Rawit"]
        },
        "Cabai Merah": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Merah"]
        },
        "Cabai Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Cabai Keriting"]
        },
        "Cabai Keriting": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Cabai Gendot": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Sayur": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Ceri": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Tomat Hijau": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Tomat"]
        },
        "Terong Putih": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Putih"]
        },
        "Terong Ungu": {
            steps: [
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet",
                "lorem ipsum dolor sit amet"
            ],
            products: ["Pot Besar", "Pupuk Organik", "Bibit Terong Ungu"]
        }
    };

    plantCards.forEach(card => {
        card.addEventListener("click", function () {
            const plantName = card.querySelector("p").textContent;
            const guide = plantGuides[plantName];

            if (guide) {
                let stepsHTML = guide.steps.map((step, index) =>
                    `<div class="step"><b>${index + 1}.</b> ${step}</div>`
                ).join("");

                let productsHTML = guide.products.map(product =>
                    `<li>${product}</li>`
                ).join("");

                guideModal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <i id="bookmarkBtn" data-feather="bookmark"></i>
                        </div>
                        <div class="modal-body">
                            <div class="guide-steps">
                                <h2>${plantName}</h2>
                                <div class="steps">${stepsHTML}</div>
                            </div>
                            <div class="guide-products">
                                <h3>Product Recommendation:</h3>
                                <ul>${productsHTML}</ul>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="closeModal">Close</button>
                            <button id="startPlant">Start Plant</button>
                        </div>
                    </div>
                `;

                guideModal.classList.add("show");
                guideModal.style.display = "flex";
                feather.replace();

                // Handle bookmark click
                const bookmarkBtn = document.getElementById("bookmarkBtn");
                bookmarkBtn.addEventListener("click", function () {
                    bookmarkBtn.classList.toggle("bookmarked");
                    bookmarkBtn.style.color = bookmarkBtn.classList.contains("bookmarked") ? "#f0ad4e" : "#000";
                });

                // Handle close modal
                document.getElementById("closeModal").addEventListener("click", () => {
                    guideModal.style.display = "none";
                    guideModal.classList.remove("show");
                });

                // Handle "Start Plant" button
                document.getElementById("startPlant").addEventListener("click", function () {
                    window.location.href = `track.html?plant=${encodeURIComponent(plantName)}`;
                });
            }
        });
    });
    
    // Track
    const params = new URLSearchParams(window.location.search);
    const plantName = params.get("plant");

    function getFormattedDate(date) {
        return date.toLocaleDateString("id-ID");
    }
    
    function addMonths(date, months) {
        let newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);
        return newDate;
    }
    
    const today = new Date();

    if (plantName) {
        document.querySelector(".plant-details h3").textContent = plantName;

        // data tanaman
        const plantData = {
            "Cabai Rawit": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Rawit.jpeg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Merah": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Merah.jpeg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Hijau": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Hijau.jpg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Keriting": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Keriting.jpg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Cabai Gendot": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Cabai Gendot.jpg",
                targets: [
                    "Day 1-7: Muncul akar kecil",
                    "Day 7-10: Daun pertama",
                    "Day 10-30: Batang mengeras dan muncul 2-4 daun sejati"
                ]
            },
            "Tomat Sayur": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Sayur.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Tomat Ceri": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Cri.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Tomat Hijau": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Hijau.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Terong Putih": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Tomat Putih.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            },
            "Terong Ungu": {
                start: getFormattedDate(today),
                growthDuration: 3,
                estimated: getFormattedDate(addMonths(today, 3)),
                image: "Terong Ungu.jpg",
                targets: [
                    "Day 1-5: Benih mulai berkecambah",
                    "Day 6-14: Tumbuh daun pertama",
                    "Day 15-30: Batang mengeras, siap dipindah"
                ]
            }
        };

        if (plantData[plantName]) {
            const plantInfo = plantData[plantName];
            document.querySelector(".plant-info img").src = plantInfo.image;
            document.querySelector(".plant-info img").alt = plantName;
            document.querySelector(".plant-details p:nth-of-type(1)").innerHTML = `<b>Start:</b> ${plantInfo.start}`;
            document.querySelector(".plant-details p:nth-of-type(2)").innerHTML = `<b>Estimated:</b> ${plantInfo.estimated}`;

            // Update target list
            const targetList = document.querySelector(".target ul");
            targetList.innerHTML = "";
            plantInfo.targets.forEach(target => {
                targetList.innerHTML += `<li><input type="checkbox"> ${target}</li>`;
            });
        }
    }

    // Handle back button
    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }

    // Handle problem button
    const problemBtn = document.querySelector(".problem-btn");
    if (problemBtn) {
        problemBtn.addEventListener("click", function () {
            alert("Cek kelembapan tanah dan perhatikan hama pada tanaman!");
        });
    }
});
