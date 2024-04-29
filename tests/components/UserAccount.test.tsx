import { render, screen } from '@testing-library/react';
import { User } from "../../src/entities";
import UserAccount from "../../src/components/UserAccount";

describe('Component: UserAccount', () => {

    // helper function to create test user.
    const getUser = (isAdmin: boolean = false) => {
        return {
            id: 1,
            name: "Mosheh",
            isAdmin: isAdmin
        } as User;
    };

    it('should render user name', () => {
        const user = getUser();

        render(<UserAccount user={user} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    it('should not render edit button if user is not admin', () => {

        const user = getUser()

        render(<UserAccount user={user} />);

        const editButton = screen.queryByRole("button");
        expect(editButton).not.toBeInTheDocument();
    });

    it('should render edit button if user is admin', () => {
        const user = getUser(true);

        render(<UserAccount user={user} />);

        const editButton = screen.getByRole("button");
        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/edit/i);
    });
});
