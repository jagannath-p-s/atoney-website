#!/bin/bash

# Create assets directory if it doesn't exist
mkdir -p assets

# Array of image URLs and their corresponding filenames
declare -A images=(
  ["https://safetysourcellc.com/product_images/uploaded_images/advantages-of-led-lights.jpeg"]="led-lights.jpeg"
  ["https://static.zawya.com/view/acePublic/alias/contentid/ZmFmOTM2NDMtYjgxZi00/0/zake1113-jpg.webp"]="moiat-green.webp"
  ["https://www.gso.org.sa/wp-content/uploads/2021/10/gso_generalsecretariat_new.png"]="gso-logo.png"
  ["https://img.indiafilings.com/learn/wp-content/uploads/2022/02/12003450/f75db914-3205-45d4-aa3c-aa9b03a5dd6c.jpg"]="saber-system.jpg"
  ["https://www.gso.org.sa/wp-content/uploads/2023/01/%D8%B4%D8%B9%D8%A7%D8%B1-%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AA%D9%82%D9%8A%D9%8A%D8%B3-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%D9%8A%D8%A9-1.jpg"]="gso-standards.jpg"
)

# Download each image
for url in "${!images[@]}"; do
  filename="${images[$url]}"
  echo "Downloading $url to assets/$filename"
  curl -L "$url" -o "assets/$filename"
done

echo "Download complete!"