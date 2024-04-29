import { render, screen } from '@testing-library/react';
import UserList from "../../src/components/UserList.tsx";
import { User } from "../../src/entities.ts";

describe('Component: UserList', () => {
    it('should render No users if list of users is empty', () => {

        render(<UserList users={[]} />);

        expect(screen.getByText(/no users/i)).toBeInTheDocument();
    });

    it('should render list of users', () => {

        const users: User[] = [
            {
                id: 1, name: "Mosheh"
            },
            {
                id: 2, name: "Johnny"
            },
        ];
        render(<UserList users={users} />);

        users.forEach(user => {
            const url = screen.getByRole("link", { name: user.name });
            expect(url).toBeInTheDocument();
            expect(url).toHaveAttribute("href", `/users/${user.id}`);
        });
    });
});
