# Track Web - Traffic Analysis Tool

A browser extension that provides detailed traffic analytics through a convenient sidebar interface. Built with React, TypeScript, and Vite.

![Track Web Extension](https://via.placeholder.com/800x500/1e293b/ffffff?text=Track+Web+Analytics+Dashboard)

## Features

- **Real-time Traffic Analysis**: Monitor website traffic metrics in real-time
- **Sidebar Interface**: Access analytics without leaving your current page
- **Interactive Charts**: Visualize data with beautiful, interactive charts
- **Cross-browser Support**: Works on all major browsers
- **Privacy Focused**: All data processing happens locally in your browser

## Installation

### Development Build

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/track-web-extension.git
   cd track-web-extension
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Load the extension in your browser:
   - Open your browser's extension management page
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The production files will be generated in the `dist` directory.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Framer Motion
- React Icons

## Project Structure

```
src/
├── api/              # API integration and data fetching
├── components/       # Reusable UI components
│   ├── Section/      # Dashboard sections
│   └── ui/           # Base UI components
├── config/           # Application configuration
├── lib/              # Utility functions
└── pages/            # Main application pages
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository.
