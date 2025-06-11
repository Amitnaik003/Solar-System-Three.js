# Solar System (Three.js)

The Solar System is a simple representation of the eight planets orbiting the Sun. This project demonstrates the use of [Three.js](https://threejs.org/) to create cool animations and visualizations. More details about how it was built can be found in this [article](https://dev.to/cookiemonsterdev/solar-system-with-threejs-3fe0).



## Assets

Most textures were sourced from [Planetary Pixel Emporium](https://planetpixelemporium.com/index.php), with the exception of the planets' rings and stars textures. Feel free to replace them with other textures as needed.

## Quick Start

1. Clone the repository:

```sh
git clone https://github.com/Amitnaik003/Solar-System-Three.js.git
cd Solar-System-Threejs
```

2. Install dependencies:

```sh
npm install
```

3. Run the app:

```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`.

## Features

- Realistic representation of the eight planets in the Solar System.
- Adjustable orbit speeds for each planet using sliders.
- Interactive 3D visualization powered by Three.js.
- Includes textures for planets, rings, and stars.

## Project Structure

```
solar-system-threejs/
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration
├── public/             # Static assets
│   └── assets/         # Textures for planets, rings, and stars
├── src/                # Source code
│   ├── index.js        # Entry point
│   ├── earth.js        # Earth-specific logic
│   ├── planet.js       # Generic planet logic
│   ├── starfield.js    # Starfield logic
│   └── sun.js          # Sun-specific logic
└── README.md           # Project documentation
```

## Technologies Used

- [Three.js](https://threejs.org/) - A JavaScript library for 3D rendering.
- [Vite](https://vitejs.dev/) - A fast build tool for modern web projects.

## How It Works

1. **Sun and Planets**: Each celestial body is represented as a `Mesh` with textures applied. The `Planet` class handles the creation and animation of planets, while the `Sun` class handles the Sun's glow and lighting effects.
2. **Starfield**: A `Starfield` class generates a background of stars using randomly distributed points.
3. **Adjustable Speeds**: Sliders in the UI allow users to adjust the orbit speeds of planets dynamically.

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Planetary Pixel Emporium](https://planetpixelemporium.com/index.php) for the textures.
- [Three.js](https://threejs.org/) for making 3D rendering accessible and fun.
