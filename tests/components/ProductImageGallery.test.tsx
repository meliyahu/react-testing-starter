import { render, screen } from '@testing-library/react';
import ProductImageGallery from "../../src/components/ProductImageGallery.tsx";

describe('Component: ProductImageGallery', () => {
    it('should render null if image list is empty', () => {

        const { container } = render(<ProductImageGallery imageUrls={[]} />);

        expect(container).toBeEmptyDOMElement();

    });

    it('should render a list of images', () => {

        const imageUrls = ["image1.png", "image2.png"];

        render(<ProductImageGallery imageUrls={imageUrls} />);

        const images = screen.getAllByRole("img");

        expect(images.length).toBe(2);
        // or
        expect(images).toHaveLength(2);

        imageUrls.forEach((imageUrl, index) => {
            expect(images[index]).toHaveAttribute("src", imageUrl);
        });

    });
});
