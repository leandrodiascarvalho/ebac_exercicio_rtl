import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    
    it('Deve permitir inserir dois comentários e exibi-los', () => {
        render(<PostComment/>);
        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('comment-submit');
        
        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
        
        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
        
        expect(screen.getByTestId('comment-item-0')).toHaveTextContent('Primeiro comentário');
        expect(screen.getByTestId('comment-item-1')).toHaveTextContent('Segundo comentário');
    });
});

module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};